var img;
    
function preload(){
  img = loadImage("./assets/peson.jpg");  
}

function setup() {
  createCanvas(600, 600);
  background(255,0,0);
}

function draw() {
  img.loadPixels();
  for (var i = 0; i < img.pixels.length; i++) {
    img.pixels[i] = img.pixels[i]/2;
  }
  img.updatePixels();
  image(img, 0, 0, 500, 400);
  circle(500,300,100);
}