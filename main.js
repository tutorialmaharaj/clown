x = 0;
y = 0;

function preload() {
   clown_nose = loadImage("https://static.wikia.nocookie.net/box-critters/images/2/2f/Clown_nose_large.png")
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();

    Video = createCapture(VIDEO);
    Video.size(300,300);
    Video.hide();
    poseNet = ml5.poseNet (Video, modelLoaded);
    poseNet.on("pose" , gotPose);

}

function modelLoaded(){
    console.log('PoseNet Is Iitialized');
}

function draw() {
 image(Video,0,0,300,300);
 image(clown_nose,x-25,y-20,50,50);
}

function takesnap()
{
    save('mysnap.png');
}

function gotPose(result)
{
    if(result.length > 0)
    {

        console.log(result);
        x = result[0].pose.nose.x;
        y = result[0].pose.nose.y;
        console.log("nose x =" + x);
        console.log("nose y =" + y);
    }
}



