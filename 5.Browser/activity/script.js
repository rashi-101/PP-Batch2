let input = document.querySelector(".input_box");
let ul = document.querySelector(".task-list");
input.addEventListener("keydown", function(e){
    
    if(e.key=="Enter"){
        let task = input.value;
        let li = document.createElement("li");
        li.innerText = task;
        li.addEventListener("dblclick", function(e){
            li.remove();
        });
        li.setAttribute("class","task");
        ul.appendChild(li);
        input.value="";
    }
})