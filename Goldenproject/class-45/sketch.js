var bgImage,bgSprite;
var spaceShip_Img;
var comet_Img;
var ogroup;
var gamestate="play";


function preload(){
  bgImage=loadImage("my game/galaxy.jpg");
  spaceShip_Img=loadImage("my game/spaceship2.jpg")
  comet_Img=loadImage("my game/comet2.jpg")
}


function setup(){
  createCanvas(windowWidth,windowHeight);
  bgSprite=createSprite(windowWidth/2,windowHeight/2,50,50);
  bgSprite.addImage(bgImage);
  bgSprite.scale=9
  bgSprite.velocityX=-2;

  bgShip=createSprite(300,500,10,10);
  bgShip.addImage(spaceShip_Img);
  bgShip.scale=0.5

  ogroup=new Group();

}


function draw(){
  background('white');
  
  //gamestate play
  if (gamestate=="play") {
    //score = score+1;
      //resetting the background
      if (bgSprite.x<500){
        bgSprite.x = windowWidth/2 
      }

      if (keyDown("UP_ARROW")){
        bgShip.y=bgShip.y-10;
        
      }

      if (keyDown("DOWN_ARROW")){
        bgShip.y=bgShip.y+10;
      }

      if (bgShip.y>windowHeight){
        bgShip.y=windowHeight
      }
      if (bgShip.y<0){
        bgShip.y=0
      }
      spawnobstacle();

      if(bgShip.isTouching(ogroup)){
        gamestate="end"
        console.log("game over")
        //ds.play();
      }
   
  }
  else{
      
  }

 

  

  drawSprites();
}

function spawnobstacle(){
  var obstacle;
  if (frameCount % 60 === 0 ) {
    obstacle = createSprite(900,random(0,windowHeight),40,50)
    obstacle.velocityX= -10
    obstacle.scale= 0.2
    obstacle.lifetime=250
    var r= Math.round(random(1,6))
    //obstacle.debug = true; 
    switch(r){
      case 1: obstacle.addAnimation("obstacle",comet_Img);
              break;
      case 2: obstacle.addAnimation("obstacle",comet_Img);
              break;
      case 3: obstacle.addAnimation("obstacle",comet_Img);
              break;        
      case 4: obstacle.addAnimation("obstacle",comet_Img);
              break;  
      case 5: obstacle.addAnimation("obstacle",comet_Img);
              break;        
      case 6: obstacle.addAnimation("obstacle",comet_Img);
              break;

    }
    ogroup.add(obstacle)
  }
}
