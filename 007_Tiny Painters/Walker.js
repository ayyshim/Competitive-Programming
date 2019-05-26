class Walker {
  constructor(x, y, {r, g, b}) {
    this.x = x
    this.y = y
    this.movementSpeed = 1
    this.color = color(r,g,b)
  }

  show() {
    const constrainX = constrain(this.x, 2, width-2)
    const constrainY = constrain(this.y, 2, height-2)
    stroke(this.color, 10)
    rect(constrainX, constrainY, 3, 3)
  }

  walk() {

    this.x = this.x + (floor(random(-1, 2)))
    this.y = this.y + (floor(random(-1, 2)))
    
  }
}
