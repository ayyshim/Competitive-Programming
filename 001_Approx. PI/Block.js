function Block(x, size, h, v, m, c) {
    this.x = x
    this.y = h - size
    this.size = size
    this.velocity = v
    this.m = m 
    this.xConstraints = c

    this.show = function(color) {
        const x = constrain(this.x, this.xConstraints, width)
        fill(color)
        noStroke()
        rect(x, this.y, this.size, this.size)
    }

    this.update = function(){
        this.x += this.velocity
    }
}