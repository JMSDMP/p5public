function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);
    noLoop()
}

function mousePressed() {
    fill(random(255),random(255),random(255))
    var size = random(1,50)
    ellipse(mouseX, mouseY, size);
}