noseX=0;
noseY=0;
difference=0;
rightWristx=0;
leftWristx=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,550);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    document.getElementById("spuare_sides").innerHTML="width and height of the square will be = " + difference + "pixels";
    background('#FF0000');
    fill('#4ea832');
    stroke('#4ea832');
    square(noseX,noseY,difference);
}

function modelLoaded()
{
    console.log('posenet is initialied');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = "+noseX+ " noseY = " + noseY);

        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference=floor(leftWristx-rightWristx);

        console.log("leftWristx= "+ leftWristx + " rightWristx = " + rightWristx + " difference =  " + difference);
    }
}