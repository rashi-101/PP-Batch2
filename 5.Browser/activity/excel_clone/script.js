let plus_container = document.querySelector(".plus-container");
let sheet_list = document.querySelector(".sheet-list");

plus_container.addEventListener("click", function(){
    let sheetsArr = document.querySelectorAll(".sheet");
    let lastSheet = sheetsArr[sheetsArr.length-1];
    let idx = lastSheet.getAttribute("sheetIdx");
    idx = Number(idx);
    let newSheet = document.createElement("div");
    newSheet.setAttribute("class", "sheet");
    newSheet.setAttribute("sheetIdx", idx+1);
    newSheet.innerText=`Sheet ${idx + 2}`;
    sheet_list.appendChild(newSheet);
});

sheet_list.addEventListener("click", function(e){
    let mySheet = e.target;
    let allSheet = e.currentTarget;
    // console.log(allSheet.children[0]);
    
    for(let i=0; i<allSheet.children.length; i++){
        allSheet.children[i].classList.remove("active-sheet");
    }
    mySheet.classList.add("active-sheet");

});

let topRow = document.querySelector(".top-row");
let str="";
for(let i=0; i<26; i++){
    str+= `<div class='col'>${String.fromCharCode(65+i)}</div>`;
}
topRow.innerHTML=str;
let leftCol = document.querySelector(".left-col");
        str = ""
        for (let i = 0; i < 100; i++) {
            str += `<div class='left-col_box'>${i + 1}</div>`
        }
        leftCol.innerHTML = str;
let grid = document.querySelector(".grid");
str="";
for(let i=0; i<100; i++){
    str+='<div class="row">'
    for(let j=0; j<26; j++){
        str+=`<div class="col">${String.fromCharCode(65+j)}${i+1}</div>`;
    }
    str+="</div>"
}
grid.innerHTML=str;