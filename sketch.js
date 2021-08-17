var canvas, backgroundImage;
var gameState = 0;
var aircraft,aircraft_image;
var enemyaircraft,enemy_aircraft_image;
var rocketenemy,rocket_enemy_image;
var obstaclesGroup;


function preload(){
backgroundImage = loadImage("images/background2.jpg");
aircraft_image = loadImage("images/aircraftimage.png");
enemy_aircraft_image = loadImage("images/enemyplane.jpg");
rocket_enemy_image = loadImage("images/rocket.jpg");

}


function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  background = createSprite(0,0,1,1);
  background.addImage(backgroundImage);
  background.scale = 1.45;
  aircraft = createSprite(windowWidth/2,windowHeight-150);
  aircraft.addImage(aircraft_image);
  aircraft.scale = 0.5;
  obstaclesGroup = createGroup();
  
  background.velocityY = 5;
}


function draw(){
//background(backgroundImage);
//console.log(background.width);
console.log(background.height);
console.log(windowHeight);
console.log(background.y)
aircraft.x = World.mouseX
//
//a = random(1,2);
if(background.y < 400){
background.y = 900;  
}
spawnObstacles();
drawSprites();
}

function spawnObstacles(){
  if(frameCount % 60 === 0 ){
    var obstacle = createSprite(random(10,1500),0,10,10)
    var a = random(1,2);
    switch(a){
    case 1: obstacle.addImage(enemy_aircraft_image);
    break; 
    case 2: obstacle.addImage(rocket_enemy_image);
    break;   
    default: break
    } 
  }
}
