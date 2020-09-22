const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here. 
	bob1 = new Bob(400,520);
	bob2 = new Bob(360,520);
	bob3 = new Bob(320,520);
	bob4 = new Bob(440,520);
	bob5 = new Bob(480,520);

	roof = new Roof(400,320,200,20);

	rope1 = new Rope(bob1.body,{x:400, y:320});
	rope2 = new Rope(bob2.body,{x:360, y:320});
	rope3 = new Rope(bob3.body,{x:320, y:320});
	rope4 = new Rope(bob4.body,{x:440, y:320});
	rope5 = new Rope(bob5.body,{x:480, y:320});
	
	Engine.run(engine);
  
}


function draw() {
   background(255);

   roof.display();

   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();

   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();

    
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
  		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-3,y:-2});
	}
}



