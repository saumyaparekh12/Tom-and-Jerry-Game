var cat1Img, cat2Img, cat4Img;
var gardenImg, garden;
var mouse1Img, mouse2Img, mouse4Img;
var cat1, cat2, cat4;
var mouse1, mouse2, mouse4;

function preload() {
    //load the images here
    garden = loadImage("images/garden.png")
   cat1 = loadImage("images/cat1.png");
   cat2 = loadAnimation("images/cat2.png", "images/cat3.png")
   cat4 = loadImage("images/cat4.png");
   mouse1 = loadImage("images/mouse1.png");
   mouse2= loadAnimation("images/mouse2.png", "images/mouse3.png")
   mouse4 = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   garden = createSprite(500, 400);
   garden.addImage(gardenImg)

   cat1 = createSprite(800, 600, 20, 20);
 cat1.addImage("cat1Img", cat1Img)

 mouse1 = createSprite(100, 600, 20, 20);
 mouse1.addImage("mouse1Img", mouse1Img)
}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide
  //keyPresssed();
if(cat1.x-mouse1.x < cat1.width/2+mouse1.width/2&&
  mouse1.x-cat1.x < cat1.width/2+mouse1.width/2){
    cat2.addImage("cat4Img",cat4Img);
    mouse2.addImage("mouse4Img", mouse4Img)
  }
    drawSprites();
}


function keyPressed(){

if(keyCode===LEFT_ARROW){
//cat2.addAnimation("cat2Img", cat2Img)
//cat2.velocityX= -3;
mouse2.addAnimation("mouse2Img", mouse2Img)
mouse1.changeAnimation("mouse2Img", mouse2Img);
cat2.addAnimation("cat2Img", cat2Img);
cat1.changeAnimation("cat2Img", cat2Img);
}
}


