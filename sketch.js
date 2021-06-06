const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var drop = [];
var maxDrops =100;
var umbrella;
var rand;
var Thunder,thunder1,thunder2,thunder3,thunder4;
var thunderCreateFrame = 0;

function preload(){
night = loadImage("Images/background/rainynight.jpg")
thunder1 = loadImage("Images/thunderbolt/1.png");
thunder2 = loadImage("Images/thunderbolt/2.png");
thunder3 = loadImage("Images/thunderbolt/3.png");
thunder4 = loadImage("Images/thunderbolt/4.png");
}

function setup(){
   var canvas = createCanvas(500,700);

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,500);
   
   for(var i = 0; i < maxDrops; i++){
       drop.push(new createDrops(random(0,500),random(0,500)));

   }
    
}

function draw(){
    
    background(0,0,0);
     
    Engine.update(engine);
    rand = Math.round(random(1,4));
    if (frameCount%80 === 0){
        thunderCreateFrame = frameCount;
        Thunder =createSprite(random(30,370)),random(10,30),10,10;
        switch(rand){
            case 1:Thunder.addImage(thunder1);
            break;
            case 2:Thunder.addImage(thunder2);
            break;
            case 3:Thunder.addImage(thunder3);
            break;
            case 4:Thunder.addImage(thunder4);
            break;
            default: break;

        }
        Thunder.scale =0.7;
    }

    if(thunderCreateFrame + 10 === frameCount && Thunder){
        Thunder.destroy();
    }

    umbrella.display();

    for(var i = 0; i < maxDrops; i++){
        drop[i].display();
        drop[i].update();
    }

    drawSprites();
    
    
}   

