function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(255);

  for (var x = 60; x < width - 60; x = x + 10) {
    colorMode(HSB);
    strokeWeight(.4);
    stroke(x, 204, 70);
   // line(x, height / 2, mouseX, mouseY);
    line(x, mouseY, mouseX, x);
  }
}
