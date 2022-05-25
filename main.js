difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
  canvas = createCanvas(450, 400);
  canvas.position(560, 150);

    video = createCapture(VIDEO);
    video.size(450, 400);
   
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }

  function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }
  
  
  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);
    }
  }

  function draw() {

  background('#cc6699');

  image(video, 0, 0, );
  

textsize(difference);
fill('#3333ff');
text('Johan', 50, 400);
  }
  