
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
var bgImage;

function preload()
{
    polygonImg = loadImage("polygon.png");
    backgroundImg();
}

function setup()
{
    createCanvas(1300, 600);

    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50, 200, 20);
    
    World.add(world, polygon);

     ground1 = new Ground(700, 580, 1300, 20);


     platform1 = new Ground(390,300,250,10);
    
    block1 = new Box(300,275,30,40);
    console.log(block1);
    block2 = new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);
    //level two
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    //level three
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    //top
    block16 = new Box(390,155,30,40);
    
    platform2 = new Ground(970, 235, 230, 10);

    //level one
    block17 = new Box(900, 195, 30, 40);
    block18 = new Box(930, 195, 30, 40);
    block19 = new Box(960, 195, 30, 40);
    block20 = new Box(990, 195, 30, 40);
    block21 = new Box(1020, 195, 30, 40);

    //level two
    block22 = new Box(930, 155, 30, 40);
    block23 = new Box(960, 155, 30, 40);
    block24 = new Box(990, 155, 30, 40);
    
    //top
    block25 = new Box(960, 115, 30, 40);

     sling1 = new SlingShot(this.polygon, {x:100, y: 200});

    Engine.run(engine);
}
function draw()
{
    rectMode(CENTER);
    if(bgImage)
        background(bgImage);

    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

    textSize(25);
    fill("white");
    text("SCORE : " + score, 750, 40);
    
    ground1.display();
    platform1.display();
    platform2.display();

    fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();

  fill("grey");
  block16.display();

  fill("pink");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill("turquoise");
  block22.display();
  block23.display();
  block24.display();

  fill("grey");
  block25.display();

  sling1.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();

   

    drawSprites();
}
function keyPressed()
{
    if(keyCode === 32){
       Matter.Body.setPosition(polygon.body, {x:100, y:200})
       sling1.attach(polygon.body);
    }
}
function mouseReleased()
{
    sling1.fly();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
async function backgroundImg(){
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJson = await response.json();
   console.log(responseJson);


    var datetime = responseJson.datetime;
   console.log(datetime);

   var hour = datetime.slice(11, 13);

    console.log(hour);

   if(hour>=06 && hour<19){
       bg = 'light.jpg';
   }
   else
   {
       bg = 'dark.jpg';
   }

   bgImage = loadImage(bg);

}