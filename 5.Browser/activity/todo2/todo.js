let plus = document.querySelector(".fa-plus");
let body = document.querySelector("body");
let main_container = document.querySelector(".main-container");
plus.addEventListener("click", function(e){
    let divpop = document.createElement("div");
    divpop.setAttribute("class","div_pop");
    body.appendChild(divpop);

    //left div
    let left = document.createElement("textarea");
    left.setAttribute("class","left");
    left.setAttribute("contentEditable","true");
    divpop.appendChild(left);
    left.setAttribute("placeholder", "Enter your task here...");


    //right div
    let right = document.createElement("div");
    right.setAttribute("class", "right_pop");
    divpop.appendChild(right);
    right.innerHTML=`<div class="filter_right pink"></div>
    <div class="filter_right blue"></div>
    <div class="filter_right green"></div>
    <div class="filter_right black"></div>`;

    left.addEventListener("keydown",function(event){
        if(event.key=='Enter'){
            body.removeChild(divpop);
            let task = document.createElement("div");
            task.setAttribute("class", "task");
            main_container.appendChild(task);
            // task.innerHTML=``;


        }
    });
});