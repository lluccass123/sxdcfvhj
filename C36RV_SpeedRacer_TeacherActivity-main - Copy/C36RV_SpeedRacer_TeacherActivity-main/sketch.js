var backgroundimage;
var desert, desertImage;
var character_Idle, character_Idleimage;
var player, playerimg, characterWalk1, walk1Ani, characterWalk2;

function preload(){
  desertImage = loadImage("./assets/desert2.png");
  character_Idleimage = loadImage("./assets/characterIdle.png");
  walkAni = loadAnimation("./assets/characterWalk1.png","./assets/characterWalk2.png","./assets/characterWalk3.png","./assets/characterWalk1.png");

}

function setup() {
  canvas = createCanvas(1400,800);
  desert = createSprite(0,0,1400,800);
  desert.addImage(desertImage);
  player = createSprite(250,525,10,10);
  player.addImage(character_Idleimage)
  player.scale = 0.3;
  player.addAnimation("walk",walkAni);
  
}

function draw() {
  background("black");
  desert.velocityY = -4;
  if (desert.x<0){
    desert.x = desert.width/2;
  }
  if (keyIsDown(RIGHT_ARROW)){
    player.x = player.x + 10
    player.changeAnimation('walk');
  }
  drawSprites();
}