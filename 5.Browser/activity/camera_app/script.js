//flow
//Task 1 : record video and download it
//video record: we need mediaStream and a mediaRecorder to record it
//fuctioning: start recording when click on record button and save it when record button is clicked again
//prerequiseite to start recording: get Media Stream and media recorder
//when recording is started, you have to keep storing video, for that we'll use data avalilabe event, whenever data is available temporarily store that availabel data is and array
//when recording is stopped, save video
//for downloading anything we have to convert to blob, for that create url of that blob. create and anchor tag, put url in its href and download it using a.download = filename and then a.click

let videoEle = document.querySelector("video");
let audioEle = document.querySelector("audio");
let constraints = {
    video:true,
    audio:true,
}
let recordState = false;

let mediaRecorder;
let buffer =[];
// using getUserMedia to ask user what all permissions you require to run your app smoothly on their systems
navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){
// alert("received media");
videoEle.srcObject = mediaStream;
//  audioEle.srcObject = mediaStream;
 mediaRecorder = new MediaRecorder(mediaStream);
 mediaRecorder.addEventListener("dataavailable", function(e){
     buffer.push(e.data);
 });
 mediaRecorder.addEventListener("stop",  function(){
    let blob = new Blob(buffer, {type:"video/mp4"});
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.download = "file.mp4";
    a.href = url;
    a.click();
 });
}).catch(function(e){
    console.log(e);
});

let videoRecorder = document.querySelector("#record-video");
videoRecorder.addEventListener("click", function(){
    if(recordState==false){
        mediaRecorder.start();
        videoRecorder.innerHTML="Recording..."
        recordState=true;
    }else{
        mediaRecorder.stop();
        videoRecorder.innerHTML="Record";
        recordState=false;
    }
});