const Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions = []

var line

var divisionHeight=300;
var score =0;
var count =0
var gamestate = "play"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}



function draw() {
  background("black");
  if (gamestate === "play"){
  textSize(20)
 text("Score : "+score,20,30);
  }
  Engine.update(engine);
  mouse()
  if (particles != null && count <= 5){
    particles.display()
    var pos = particles.body.position
    if (pos.y>500){
    if (pos.x>320 &&  pos.x <400 ){
     particles = null
      score+=500
    }
    if (pos.x > 400 && pos.x< 480){
      particles = null
      score +=500
    }
    if (pos.x> 480 && pos.x< 560){
      particles = null
      score+=400
    }
    if (pos.x>560 && pos.x< 640){
      particles = null
      score+=300
    }
    if (pos.x>640 && pos.x<720){
      particles = null
      score+=200
    }
    if (pos.x>720 && pos.x< 800){
      particles = null
      score+=100
    }
    if (pos.x>240 && pos.x< 320){
      particles = null
      score+=400
    }
    if (pos.x>160 && pos.x< 240){
      particles = null
      score+=300
    }
    if (pos.x > 80 && pos.x<160 ){
      particles = null
      score+=200
    }
    if (pos.x > 0 && pos.x< 80){
      particles = null
      score+=100
    }
 
  }
  }

  if (gamestate === "end"){
    stroke("white")
    textSize(60)
    text ("GAME OVER!",250,400)
    text ("Score:"+score,250,300)
  }
   
  if (count>=6){
    gamestate = "end" 
  }
  if (gamestate === "play"){
textSize(30)
text("100",730,520)
text("100",10,520)
text("200",650,520)
text("200",100,520)
text("300",570,520)
text("300",180,520)
text("400",490,520)
text("400",260,520)
text("500",340,520)
text("500",415,520)



for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }}
  // console.log(particles.body.position.x)
}
function mouse(){
  if (mouseIsPressed === true && gamestate === "play" && frameCount%20===0 && count <=5){
    count++ 
    particles = new Particle(mouseX,10, 10,10)
    
  }
}