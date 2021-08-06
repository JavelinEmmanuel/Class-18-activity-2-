var std1;
var std2;

function setup() {
  createCanvas(400,400);
  std1 = new Student("rahul", 30, 17)
  std1.display();

  std2 = new Student("rohit", 35, 16)
  std2.display();
}

function draw() 
{
  background(30);
  
}