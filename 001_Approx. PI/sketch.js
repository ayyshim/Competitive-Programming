var mainCvH

var logoFont
var lightFont
var boldFont

var bigBlock
var smallBlock

var count = 0

var digitsOfPI = 5
var initVelocity = -4
var smallBlockMass = 10
var bigBlockMass

/*
Stats
*/
var sbm, bbm, sbv, bbv, dopi, tc, pival

function preload() {
  logoFont = loadFont('./fonts/logo.otf')
  boldFont = loadFont('./fonts/CODE Bold.otf')
  lightFont = loadFont('./fonts/CODE Light.otf')
}

function setup() {
  createCanvas(window.innerWidth, 200).parent('canvas')
  sbm = document.getElementById('sbm')
  sbv = document.getElementById('sbv')
  bbm = document.getElementById('bbm')
  bbv = document.getElementById('bbv')
  dopi = document.getElementById('dopi')
  tc = document.getElementById('tc')
  pival = document.getElementById('pival')

  mainCvH = height - 100
  bigBlockMass = smallBlockMass * pow(100, digitsOfPI - 1)
  timeSteps = pow(10, digitsOfPI - 2)

  smallBlock = new Block(300, 60, mainCvH, 0, smallBlockMass, 0)
  bigBlock = new Block(
    width / 2,
    100,
    mainCvH,
    initVelocity / timeSteps,
    bigBlockMass,
    smallBlock.size
  )
  updateStat()
}

function draw() {
  background(color(61, 61, 61))

  noStroke()

  // Wall text
  fill(255)
  textFont(boldFont)
  textSize(13)
  textAlign(LEFT)
  text('Wall', 10, mainCvH / 2)

  // Main logo text
  fill(color(99, 110, 114))
  textFont(logoFont, windowWidth / 50)
  textAlign(CENTER, CENTER)
  text('Approximating PI - PI Pool', width / 2, 40)

  // Shift origin point inside canvas
  translate(50, 30)

  // Draw wall and ground
  stroke(255)
  line(0, 0, 0, mainCvH)
  line(0, mainCvH, width, mainCvH)

  for (let i = 0; i < timeSteps; i++) {
    // Blocks

    if (
      collideRectRect(
        bigBlock.x,
        bigBlock.y,
        bigBlock.size,
        bigBlock.size,
        smallBlock.x,
        smallBlock.y,
        smallBlock.size,
        smallBlock.size
      )
    ) {
      const v1 = changeVelocity(bigBlock, smallBlock)
      const v2 = changeVelocity(smallBlock, bigBlock)
      bigBlock.velocity = v1
      smallBlock.velocity = v2
      count++
    }

    if (smallBlock.x < 1) {
      smallBlock.velocity = -smallBlock.velocity
      count++
    }

    bigBlock.update()
    smallBlock.update()
  }
  bigBlock.show(color(255, 77, 77))
  smallBlock.show(color(255))
  updateStat()

  if (
    bigBlock.x > width &&
    smallBlock.velocity > 0 &&
    smallBlock.velocity < bigBlock.velocity
  ) {
    pival.innerHTML += " (Done)"
    noLoop()
  }
}

function changeVelocity(change, wrt) {
  var a = ((change.m - wrt.m) / (change.m + wrt.m)) * change.velocity
  var b = ((2 * wrt.m) / (change.m + wrt.m)) * wrt.velocity

  return a + b
}

function updateStat() {
  bbm.innerHTML = bigBlockMass
  sbm.innerHTML = smallBlockMass
  bbv.innerHTML = bigBlock.velocity
  sbv.innerHTML = smallBlock.velocity
  pival.innerHTML = count / pow(10, digitsOfPI - 1)
  dopi.innerHTML = digitsOfPI
  tc.innerHTML = count
}

function windowResized() {
  resizeCanvas(windowWidth, 300)
}
