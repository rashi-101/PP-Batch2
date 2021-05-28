let videoEle = document.querySelector("video");
let audioEle = document.querySelector("audio");
let captureBtn = document.querySelector(".capture-btn");
//22-05
let rBtn = document.querySelector(".record-btn");
let recordContainer = document.querySelector(".record-container");
let captureContainer = document.querySelector(".capture-container");
let timingEle = document.querySelector(".timing");
let allFilters = document.querySelectorAll(".filter");
//

let constraints = {
    video: true,
    audio: true,
}
let mediaRecorder;
let recordState = false;
let buffer = [];
navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
    
    videoEle.srcObject = mediaStream;
    mediaRecorder = new MediaRecorder(mediaStream);

    mediaRecorder.addEventListener("dataavailable", function (e) {
        //as and when the video is recorded, we are storing that chunk of video, this chunk of video is in Blob form
        buffer.push(e.data);
    });

    mediaRecorder.addEventListener("stop", function () {
        let blob = new Blob(buffer, { type: "video/mp4" });

        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");

        a.download = "file.mp4";
        a.href = url;
        a.click();
    });
}).catch(function (e) {
    console.log("There's some error:\n"+e);
});
let videoRecorder = document.querySelector("#record-video");

//22-05
videoRecorder.addEventListener("click", function () {
    if(!mediaRecorder){
        alert("Allow File permissions");
        return;
    }
    if (recordState == false) {
        mediaRecorder.start();
        // videoRecorder.style.animations = 
        recordState = true;
        timingEle.classList.add("timing-active");
        startCounting();
    } else {
        mediaRecorder.stop();
        recordState = false;
        timingEle.classList.remove("timing-active");
        stopCounting();
    }
});
captureBtn.addEventListener("click", function(){
    if(videoEle.srcObject==null){
        alert("No media source available");
        return;
    }
    //create canvas ele
    let canvas = document.createElement("canvas");
    canvas.width = videoEle.videoWidth;
    canvas.height= videoEle.videoHeight;
    let tool = canvas.getContext("2d");
    tool.drawImage(videoEle,0,0);
    let link = canvas.toDataURL();
    let anchor = document.createElement("a");
    anchor.href = link;
    anchor.download="file.png";
    anchor.click();
});

//22-05
// recordContainer.addEventListener("click"){
//     // recordContainer
// }
function startCounting(){
    let timecount =0;
    clearObj = setInterval(function(){
        let secs = Number.parseInt(timecount%60)<10?`0${Number.parseInt(timecount%60)}`:`${Number.parseInt(timecount%60)}` ;
        let mins = Number.parseInt(timecount/60)<10?`0${Number.parseInt(timecount/60)}`:`${Number.parseInt(timecount/60)}`;
        let hrs = Number.parseInt(timecount/3600)<10?`0${Number.parseInt(timecount/3600)}`:`${Number.parseInt(timecount/3600)}`;
        timingEle.innerText =`${hrs}:${mins}:${secs}`;
        timecount++;
    },1000);
}
function stopCounting(){
    timingEle.innerText = "00:00:00";
    clearInterval(clearObj);
}