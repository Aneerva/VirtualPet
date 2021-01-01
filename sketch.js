//Create variables here
var dog, happyDog, database,foodS, foodStock,dogImg

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}


function setup() {
	createCanvas(500, 500);
dog = createSprite (250,250)
dog.addImage("dogImg")

}


function draw() {  
 background(46,139,87)
 if(keywentDown(UP_ARROW)){ 
   writeStock(foods); dog. addīmage (dogHappy);
 }
 function readstock(data) {
    foods=data.val(); 
  }

// Function to write values in DB

function writeStock(x){

database.ref("/").update({

Food:x

})
  drawSprites();
  //add styles here
  
