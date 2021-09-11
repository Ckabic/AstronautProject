var bg1
var sleep
var brush
var gym
var eat
var drink
var move
var astronaut 

function preload(){
bg1=loadImage("iss.png")
sleep = loadAnimation("sleep.png")
brush = loadAnimation("brush.png")
gym = loadAnimation("gym1.png","gym2.png")
eat = loadAnimation("eat1.png","eat2.png")
drink = loadAnimation("drink1.png","drink2.png")
bath = loadAnimation("bath1.png"," bath2.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  astronaut=createSprite(windowWidth/2,450)
  astronaut.scale = 0.1;
  
}


function draw() {
  background(bg1)

 if (keyDown("UP_ARROW")){
astronaut.addAnimation("drinking",drink)
astronaut.changeAnimation("drinking")
astronaut.y=450;
 }

 if (keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming",gym)
  astronaut.changeAnimation("gyming")
  astronaut.y=450;
   }

   if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("sleeping",sleep)
    astronaut.changeAnimation("sleeping")
    astronaut.y=440;
     }

     if (keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("eating",eat)
      astronaut.changeAnimation("eating")
      astronaut.y=380;
       }


  textSize(20)
  fill("white")
  text("UP=Drinking, DOWN=Gymming, LEFT=Sleeping, RIGHT=Eating",420,100)
  drawSprites();
}