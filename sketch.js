const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


function preload() {
     getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
}

function draw(){
// add condition to check if any background image is there to add
  if (backgroundImg)
      background(backgroundImg);
     
  Engine.update(engine);


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var Time = responseJSON.datetime;
    var hour = Time.slice(11,13);


    if (hour >= 24 && hour <= 02)
    {
        var bg = "sunrise1.png";
    }

    else if (hour >= 02 && hour <= 04){
        var bg = "sunrise2.png";
    }

    else if (hour >= 04 && hour <= 06){
        var bg = "sunrise3.png";
    }

    else if (hour >= 06 && hour <= 08){
        var bg = "sunrise4.png";
    }

    else if (hour >= 08 && hour <= 10){
        var bg = "sunrise5.png";
    }

    else if (hour >= 10 && hour <= 12){
        var bg = "sunrise6.png";
    }

    else if (hour >= 12 && hour <= 14){
        var bg = "sunset7.png";
    }

    else if (hour >= 14 && hour <= 16){
        var bg = "sunset8.png";
    }

    else if (hour >= 16 && hour <= 18){
        var bg = "sunset9.png";
    }

    else if (hour >= 18 && hour <= 20){
        var bg = "sunset10.png";
    }

    else if (hour >= 20 && hour <= 22){
        var bg = "sunset11.png";
    }

    else {
        var bg = "sunset12.png";
    }


    backgroundImg = loadImage(bg);
}



