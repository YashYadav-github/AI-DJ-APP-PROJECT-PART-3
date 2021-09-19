onMyWaySong = "";
gratefulSong = "";
leftWristX = 0;
leftWristY = 0;
RightWristX = 0;
RightWristY = 0;

function preload(){
    onMyWaySong = loadSound("OnMyWay.mp3")
    gratefulSong = loadSound("Grateful.mp3")
}

function setup(){
    canvas = createCanvas(600,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 450);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        // console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        // console.log("LeftWristX : "+leftWristX+" LeftWristY : "+leftWristY+" RightWristX : "+rightWristX+" RightWristY : "+rightWristY)

    }
}