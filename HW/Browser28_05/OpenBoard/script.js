
let widgetsContainer = document.querySelector(".widget-container");
let windowContainer = document.querySelector(".window-container ");
let pencil = document.querySelector("#pencil");
let canvas = document.querySelector("#canvas");
let tool = canvas.getContext("2d");
let functions = document.querySelector(".functions");

widgetsContainer.addEventListener("dragstart", function (event) {
    this.style.opacity = '0.4';
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
        (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY));
});

windowContainer.addEventListener("dragover", function (e) {
    e.preventDefault();
});
windowContainer.addEventListener("drop", function (event) {
    var offset = event.dataTransfer.getData("text/plain").split(',');
    widgetsContainer.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    widgetsContainer.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    widgetsContainer.style.opacity = '1';
    event.preventDefault();
});

pencil.addEventListener("click", drawWithPencil);
function drawWithPencil(e) {
    console.log("clicked pencil");
    windowContainer.addEventListener("mousedown", function (e) {
        console.log("mousedown");
        tool.beginPath();
        tool.lineWidth = 3;
        tool.strokeStyle = "white";
        tool.moveTo(e.clientX, e.clientY - functions.getBoundingClientRect().height);

        windowContainer.addEventListener("mousemove", mouseMove);
        function mouseMove(e) {
            tool.lineTo(e.clientX, e.clientY - functions.getBoundingClientRect().height);
            tool.stroke();
            tool.save();
        }
        windowContainer.addEventListener("mouseup", function (e) {
            windowContainer.removeEventListener("mousemove", mouseMove);
        });
    });




}

window.addEventListener("resize", function () {
    canvas.height = window.innerHeight - functions.getBoundingClientRect().height;
    canvas.width = window.innerWidth;
    tool.restore();
});

// tool.beginPath();
// tool.moveTo(10,10);
// tool.lineTo(120,10);
// tool.stroke();
// tool.strokeStyle = "red";
// tool.lineTo(300,300);
