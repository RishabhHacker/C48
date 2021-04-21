var track;
var boy,boyImg,boyImg1;
var cop,cop1,cop2;
var canvas
var coin,coinImg;
var score;
var train,train2,train3,trainImg;


function preload(){
    track=loadImage("Track.png");
    boyImg=loadImage("boy.png");
    boyImg1=loadImage("boy1.png");
    cop1=loadImage("cop1.png");
    cop2=loadImage("cop2.png");
    coinImg=loadImage("coin.png");
    trainImg=loadImage("train.png")
}
function setup(){
    canvas=createCanvas(displayWidth*4,displayHeight);
    
    boy=createSprite(displayWidth/2,displayHeight/4,200,200);
    boy.addAnimation("boyImg",boyImg,boyImg1);
    boy.scale=0.4;
    cop=createSprite(displayWidth/2,displayHeight/2,200,200);
    cop.addAnimation("cop1",cop1,cop2);
    cop.scale=0.9;
    boy.velocityY=-1;
    cop.velocityY=-0.5;
    boy.velocityX=-0.;
    boy.velocityY=-0.6
   train=createSprite(1470,200,500,500);
   train.addImage("trainImg",trainImg);
   train.scale=1.2;
   train2=createSprite(1000,200,500,500);
   train2.addImage("trainImg",trainImg);
   train2.scale=1.2;
}
function draw(){
    background(track);
    cop.x=boy.x;
    canvas.velocityY=2;
    spawnCoin();
    console.log(cop.y);
    
    //if(boy.isTouching("coin")){
      //  score=score+1;
    //}
    if (keyDown("D")){
        boy.x=boy.x+2;
    }

    if (keyDown("A")){
        boy.x=boy.x-2;
    }
   if(boy.y<200){
    boy.y=270;
   }
   if(cop.y<400){
    cop.y=500;
   }
    drawSprites();
}
function spawnCoin(){
    if(frameCount%60===0){
        var xpos=random(100,5000);
        var ypos=random(200,800);
       coin=createSprite(xpos,ypos,200,200);
        coin.addImage("coin",coinImg);
        coin.scale=0.3       ; 
        coin.lifetime=50;
        
    }
      
}

   