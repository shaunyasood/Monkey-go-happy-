
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime;
var bananaGroup;
var banana;
var stone;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(80,600,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground=createSprite(350,600,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);
  
  
bananaGroup = new Group ();
  
  
}


function draw() {
createCanvas(600,600);
background ("lightblue");


  
  if(keyDown("space")) {
  monkey.velocityY=-12;
  }
  
  monkey.velocityY= monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  food();
  
drawSprites();
stroke("red");
textSize(20);
fill("red");
text("Score",score,100,150);

stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate()); 
text("Survival Time:",survivalTime,100,50);  
}

function food () {
if(frameCount % 80 === 0) {
banana = createSprite(400,400,20,20);
banana.addImage(bananaImage);
banana.scale=0.2; 

  banana.velocityX=-4;
  
  
  banana.y = Math.round(random(120,200));
  
  banana.setLifetime=100;
  
  bananaGroup.add(banana);
  }
}

function obstacle () {
 if(frameCount % 300 === 0) {
stone = createSprite(500,300,40,40);
stone.addImage(obstacleImage);
stone.scale=0.2; }

   stone.velocityX=-4;
  
  stone.y = Math.round(random(50,354));
  
  stone.setLifetime=100;
  
  obstacleGroup.add(stone); 
  
}