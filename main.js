function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
  
   canvas = createCanvas(550,550);
   canvas.position(560,150);

   posenet = ml5.poseNet(video,modelLoaded);
   posenet.on('pose',gotPoses);
}
function draw(){
    background('ff0000');
    fill(255,0,0);
    stroke(255,0,0)  
    text("Kavish",nosex,nosey);
    
}
document.getElementById("square_size").innerHTML="The Size Of The Font Is : "+difference+" px";
function modelLoaded(){
    console.log("Posenet Is Ready!");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;

        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;

        console.log("Nose X:" + nosex + "  Nose Y:" + nosey);
        console.log("Left Wrist X:" + leftwristx + "  Right Wrist Y:" + rightwristx);
        difference=floor(leftwristx - rightwristx);
    }
}

nosex=0;
nosey=0;
difference=0;
leftwristx=0;
rightwristx=0;