class Umbrella{
   constructor(x,y){  
          var options = {
              'isStatic':true,

          }
          this.body = Bodies.circle(x,y,50,options);
          this.radius = 100;
          this.image = loadImage("Images/Walking Frame/walking_1.png","Images/Walking Frame/walking_2.png","Images/Walking Frame/walking_3.png","Images/Walking Frame/walking_4.png","Images/Walking Frame/walking_5.png","Images/Walking Frame/walking_6.png","Images/Walking Frame/walking_7.png","Images/Walking Frame/walking_8.png");
          World.add(world,this.body);
   }
   display(){
       var pos = this.body.position;
      var person = createSprite(pos.x,pos.y,this.radius,this.radius);
      person.scale=0.8;
       person.addImage("person1",this.image);
      //ellipse(pos.x,pos.y,this.radius,this.radius);

      
   }
}