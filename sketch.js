var PLAY = 1
var END = 0
gamestate = 1
var survival
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(500, 400);
  monkey = createSprite (80, 350, 900, 10)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1


  ground = createSprite(400,380,900,10)
  ground.velosityX = -4
  ground.x = ground.width/2
  console.log(ground.x)
  FoodGroup = new Group()
  obstacleGroup = new Group()
}


function draw() {
    background("white")
    textSize (20)
    fill ("white")
    stroke ("white")
    text ("score:" + score ,500,50)
  
  if(gamestate === PLAY){
    
    stroke ("black")
    fill("black")
    survivalTime=Math.ceil(frameCount/frameRate())
    text ("SURVIVAL TIME:" + survivalTime,100,50)
    
  if(keyDown("space")&& monkey.y >= 250) {
        monkey.velocityY = -12;
    
       
    }
  
  spawnFood()
  spawnObstacles()
    
    
    if(obstacleGroup.isTouching(monkey)){
      gamestate = 0
    }
  }
  if(gamestate === 0){

   
  
    
    obstacleGroup.setLifetimeEach(-1)
    FoodGroup.setLifetimeEach(-1)
    
    obstacleGroup.setVelocityXEach(0)
    FoodGroup.setVelocityXEach(0)
    
  }
   monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(ground);
 drawSprites() 
 
}
function spawnFood(){
 
  if(frameCount % 80 === 0){
     banana = createSprite(380,165)
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.lifetime = 150
    banana.velocityX = -8
    
    var rand = Math.round(random(1,6));
     switch(rand) {
      case 1: banana.y = 120;
              break;
      case 2: banana.y = 140;
              break;
      case 3: banana.y = 160;
              break;
      case 4: banana.y = 180;
              break;
      case 5: banana.x = 200;
              break
      default: break;
     }
    FoodGroup.add(banana);
  }
  
}

function spawnObstacles(){
  if(frameCount % 100 === 0){
     obstacle = createSprite(350,355)
     obstacle.addImage(obstaceImage)
     obstacle.scale = 0.2
    obstacle.velocityX = -8
   
        
     obstacleGroup.add(obstacle)
  }
}








