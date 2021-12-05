var spaceship, spaceshipIMG;
var spaceIMG;
var meteor, meteor2, meteorIMG, meteor2IMG;
var spaceShot, spaceShotIMG;
var restart, restartIMG;
var score = 0;

var highScore = 100;

function preload(){
spaceshipIMG = loadImage("naveEspacial.png");
spaceIMG = loadImage("Noche.png");
meteorIMG = loadImage("meteorito.png");
spaceShotIMG = loadImage("shot.png");
restartIMG = loadImage("Intentalo.png");
meteor2IMG = loadImage("meteorito2.png");
}


function setup() {
  createCanvas(600,600);

  
  

  spaceShot = createSprite(spaceship, 525, 50, 50);
  spaceShot.scale = 0.2;
  spaceShot.addImage("bala", spaceShotIMG);

  spaceship = createSprite(300, 525, 50, 50);
  spaceship.addImage("cohete", spaceshipIMG);

  restart = createSprite(300, 300, 50, 50);
  restart.addImage("reinicia", restartIMG);

  meteor = createSprite(612, 70, 50 ,50);
  meteor.addImage("meteorito", meteorIMG );

  meteor2 = createSprite(-6, 130, 50, 50);
  meteor2.addImage("meteorito2", meteor2IMG);

  

 
  
}



function draw() {
  background(spaceIMG);  
  drawSprites();

  text("score: "+ score, 510, 50);
  text("score: "+ highScore, 510, 75);

  restart.visible = false;
  restart.scale = 2;

  if (keyDown("left_arrow")){
    spaceship.x = spaceship.x -5;
    spaceShot.x = spaceship.x;
  }


if (keyDown("right_arrow")){
  spaceship.x = spaceship.x +5;
  spaceShot.x = spaceship.x;

}



if (keyDown("space")){
 spaceShot.velocityY = -5;
}

console.log(spaceShot.y);

if (spaceShot.y === 0){

  spaceShot.y = 525;
  spaceShot.positionX = spaceship;
  spaceShot.velocityY = 0;

}

if (meteor.x === 612){

  meteor.velocityX = -3;

}

if (meteor.x === 0){
  meteor.x = 612;

}

if (meteor2.x === -6){
  meteor2.velocityX = 6;

}

if (meteor2.x === 612){
  meteor2.x = -6;

}

if (spaceShot.isTouching(meteor)){
  score = score +1;
  spaceShot.y = 525;
  spaceShot.x = spaceship.x;
  spaceShot.velocityY = 0;
  meteor.x = 612;

}

if (score >= 100){
  highScore = 150;
}

if (score >= 150){
  highScore = 200;
}

if (score >= 200){
 highScore = 500;
}

if (spaceShot.isTouching(meteor2)){
  score = score +5;
  spaceShot.y = 525;
  spaceShot.x = spaceship.x;
  spaceShot.velocityY = 0;
  meteor2.x = -6;
}

if (spaceship.x > 600){

 restart.visible = true;
 spaceship.visible = false;
 spaceShot.visible = false;
 meteor.visible = false;
 meteor2.visible = false;
}

if (spaceship.x < 0){

  restart.visible = true;
  spaceship.visible = false;
  spaceShot.visible = false;
  meteor.visible = false;
  meteor2.visible = false;

}

if (mousePressedOver(restart)){

  restart.visible = false;
  spaceship.visible = true;
  spaceShot.visible = true;
  meteor.visible = true;
  meteor2.visible = true;
  score = 0;
  
  spaceship.x = 300;
  spaceship.y = 525;
  spaceShot.y = 525;
  meteor.x = 612;
  meteor2.x = -6;

}


}





