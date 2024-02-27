var song1="";
var song2="";
function preload(){
    song1=loadSound("blinding_lights.mp3");
    song2=loadSound("boulevard_of_broken_dreams.mp3");
}
function setup(){
    canvas=createCanvas(550,500);
    canvas.position(550,150);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,550,500);
}