let x = 0;
let y = 0;
let xspeed = 3;
let yspeed = 3;

function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(206, 233, 208);

  quad(0 + x, 250 + y, 250 + x, 150 + y, 500 + x, 250 + y, 250 + x, 350 + y);

  x += xspeed;
  y += yspeed;

  
  if (x > width - 500 || x < 0) {
    xspeed *= -1; 
  }


  if (y > height - 350 || y + 350 < 200) {
    yspeed *= -1; 
  }
  
  fill(139, 212, 243)
}

