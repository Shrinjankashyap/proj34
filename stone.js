class Stone{
    constructor(x,y){
       var options = {
           'density':4,
           'friction':1,
           'restitution':0.5,
       };
       this.body=Bodies.rectangle(x,y,50,50,options);
       this.width=150;
       this.height=40;
       World.add(world,this.body);
    };
    display(){
       var pos=this.body.position;
       pos.x=500;
       pos.y=200
      
       var angle = this.body.angle;

       push();
       translate(pos.x,pos.y);
       rotate(angle);
       strokeWeight(3);
       stroke('white');
       fill('green');
       rectMode(CENTER);
       rect(0,0,this.width,this.height);
       pop();
    };
};