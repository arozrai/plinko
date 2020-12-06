const World=Matter.World
const Bodies=Matter.Bodies
const Engine=Matter.Engine

var engine, world
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300

function setup() {
  createCanvas(480,800);
  engine=Engine.create()
  world=engine.world
  ground1=new Ground(240, 790, 480, 20);

  for (var k = 0; k<=width; k = k +80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight))
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }

  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }
}

function draw() {
  Engine.update(engine)
  background(0);  
  ground1.display()
  if(frameCount%60===0){
    particles.push(new Particle(random(50,400),20,10))
  }

  for(var j = 0; j< particles.length; j++){
    particles[j].display()
  }

  for(var k = 0; k< divisions.length; k++){
    divisions[k].display()
  }

  for(var l = 0; l< plinkos.length; l++){
    plinkos[l].display()
  }
  drawSprites();
}