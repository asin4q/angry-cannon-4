const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var ground,platform, platform2
var cannon,cannonBase
var stone
var box1,box2,box3,box4,box5
var log1,log2,log3,log4,log5
var balls = []



function preload(){

}

function setup(){
    
var canvas = createCanvas(1200,400)
engine = Engine.create();
world = engine.world;
angleMode(DEGREES)
angle = 15
ground = new Ground(1400,height,2800,40)
platform = new Ground(100, 305, 300, 170)



box1 = new Box(700,320,70,70);
box2 = new Box(920,320,70,70);
box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70);

log1 = new log(810,260,300, 20)
log2 = new log(810,160,300, 20)
box5 = new Box(810,60,70,70)
log4 = new log(750,40,150, 20)
log5 = new log(860,20,150,20)

cannon = new Cannon(180, 135, 130, 100, angle)

}

function draw(){
   background("white")

    Engine.update(engine)

   // cannon.display()
    
    ground.display()
    platform.display()
    
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    log1.display()
    log2.display()
    box5.display()
    log4.display()
    log5.display()
    cannon.display()
    
    for (var i = 0; i < balls.length; i++) {
        showCannonBalls(balls[i], i);
            
      }


}


function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x, cannon.y);
    cannonBall.trajectory = [];
    Matter.Body.setAngle(cannonBall.body, cannon.angle);
    balls.push(cannonBall);
  }
}

function showCannonBalls(ball, index) {
  if (ball) {
    ball.display();
    ball.animate();
    if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
        
       ball.remove(index)
    }
  }
}


function keyReleased() {
if (keyCode === DOWN_ARROW) {
balls[balls.length - 1].shoot();

}
}