video = "";
status = "";
objects =[]

function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 480, 380);
    if (status!="") 
    {
        objectdetector.detect(video.gotresult);
       for (i= 0;i <objects.length; i++) {
        document.getElementById("status").innerHTML = "status detected object";
        document.getElementById("noo").innerHTML = "number of detected object"+ objects.length;
        fill("#FFA500");
        
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x + 15,objects[i].y+15 );
        noFill();
        stroke("FFA500");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
       }
    }


}
function gotresult(error,results){
if (error) {
    console.log(error);
    
} else {
    console.log(results);
    objects=results;
}
}

function start() {
    objectdetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "status detecting object";

}

function modelloaded() {
    console.log('modelloded');
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}