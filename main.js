nose_x=0;
nose_y=0;
difference=0
leftWristX=0;
rightWristX=0;

function preload()
{

}

function setup()
{
   canvas=createCanvas(550,550);
   video=createCapture(VIDEO);
   video.size(550,500);
   canvas.position(560,80)
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("poseNet is initialized");
}

function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results)
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;

        difference=leftWristX - rightWristX;

    }

}

function draw()
{
   background("#CFCFD1")
   square(nose_x,nose_y,difference);
   fill("red");
   stroke("red");
}