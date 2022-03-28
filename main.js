X = 0;
Y = 0;


function preload() {
moustache = loadImage('https://p7.hiclipart.com/preview/788/872/899/movember-moustache-clip-art-vector-mustache.jpg');
}

function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

postNet = ml5.postNet(video, modelLoaded)
postNet.on('pose', gotPoses);
}

function draw() {
image(video, 0, 0, 300, 300);
image(moustache, X, Y, 30, 30);
fill(250, 0, 0);
stroke(255, 0, 0);
circle(X, Y, 20);
}

function take_snapshot() {
save('myFilterImage.png')
}

classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
console.log('Posenet Is Initialied');
}

function gotPoses(results)
{
if (results.length > 0) 
{
console.log(results);
noseX = results[0].pose.x - 5;
noseY = results[0].pose.y - 5;
console.log("x = " + X);
console.log("y = " + Y);
}
}