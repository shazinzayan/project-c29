var ground,platform,box1,box2,box3,box4,box5,box6,box7,box8,box9,polygon;

function setup(){
    var canvas = createCanvas(1200,400);
ground = new Ground();
platform = new Ground(150, 305, 300, 170);
box1 = new Box(390,155,30,40)
box2 = new Box(360,195,30,40)
box3 = new Box(390,195,30,40)
box4 = new Box(420,195,30,40)
box5 = new Box(330,235,30,40)
box6 = new Box(360,235,30,40)
box7 = new Box(390,235,30,40)
box8 = new Box(420,235,30,40)
box9 = new Box(450,235,30,40)
polygon = bodies.circle(50,200,20)
world.add(world,polygon)
slingShot = new SlingShot(this.polygon,x:100,y:200)

}

function draw(){
ground.display();
platform.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(polygon.body);
    }
}




