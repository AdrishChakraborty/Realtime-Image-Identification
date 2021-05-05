function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classiefier=ml5.imageClassifier('MobileNet',modelLoaded);
}
function draw() {
image(video, 0,0,300,300);
  classiefier.classify(video,gotResult);
}
function modelLoaded() {
  console.log('Model Loaded!');
}
function gotResult(error,results) {
  if (error){
    console.error(error);
  } else{
    console.log(results);
    document.getElementById("ressult_object_name").innerHTML=results[0].label;
    document.getElementById("result_accuaracy_name").innerHTML=results[0].confidence.toFixed(3);
  }
}