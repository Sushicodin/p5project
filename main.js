function preload() {

}

function setup() {
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();



}

function draw() {
image(video,0,0,640,480);
circle(600,500,100);
fill(255,0,0);
circle(600,1,100);
fill(0,255,0);
circle(1,500,100);
fill(255,0,0);
circle(1,1,100);
fill(0,255,0);
}



function take_snapshot(){
    save("P5Project_image.png");
}