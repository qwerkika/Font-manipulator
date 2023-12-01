function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    postNet=mi5.postNet(video,modelLoaded);
    postNet.on("pose",gotPoses);
}
function modelLoaded()
{
    console.log("postNet is initilized");
}
function draw()
{
    background("#89DAFF");
}
function gotPoses()
{
    if(results.length>0)
    {
        console.log(results)
    }
}