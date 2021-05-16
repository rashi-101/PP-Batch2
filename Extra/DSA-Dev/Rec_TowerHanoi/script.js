
let box1 = document.querySelector(".box1");
let towers = document.querySelectorAll(".tower");
let button = document.querySelector("button");
// document.body.addEventListener("click",function(){
//    let t = towers[0].children[2];
//    towers[0].children[2].remove();
//    console.log(towers[2]);
//    towers[2].appendChild(t);
// });

let arr =[];
function toh( n, src, dest, help){
    if(n==-1){
        return;
    }
    toh(n-1, src, help, dest);
    let eleId = Number(src.children.length-1);
    move(eleId,src, dest);
    
    toh(n-1, help, dest,src);
}

function move(n,src,dest){
        let t = src.children[n];
        src.children[n].remove();
        dest.appendChild(t); 
}
// move(2,towers[0],towers[2]);

button.addEventListener("click",function(){
    toh(2, towers[0],towers[1],towers[2]);
});
