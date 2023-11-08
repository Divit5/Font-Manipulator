function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function draw () {
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width And Height of a Square Will be = " + difference +"px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
    textSize(30);
}

function text() {

}

function gotPoses (results)
{
    if(results.lenght > 0)
    {
        console.log(results);
    }
}