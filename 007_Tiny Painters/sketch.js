// DOM Elements
var xCord, yCord
var walkers = []

// Walker
function setup() {
  createCanvas(500, 500).parent('c')
  background(0);

}

function mousePressed() {
  if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {

    if(walkers.length < 10) {
      const r = floor(random()*255 + 1)
      const g = floor(random() * 255 + 1)
      const b = floor(random() * 255 + 1)
      const rgb = {
        r: r,
        g: g,
        b: b
      }
      const walker = new Walker(mouseX, mouseY, rgb)
      
      walkers.push(walker)
    }
  }
}

function draw() {

  walkers.forEach(walker => {
    walker.walk()
    walker.show()
  })

}
