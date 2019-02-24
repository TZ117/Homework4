function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);

  for (var x = 50; x < width; x = x + 10) {
    colorMode(HSB);
    strokeWeight(.4);
    stroke(x, 204, 70);
    line(x, height/2, x+100, height/2-75);
  }
}
