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
        str+=`<div class="col" rid="${i}" cid ="${j}" contenteditable="true"></div>`;
    }
    str+="</div>"
}
grid.innerHTML=str;


let allCells = document.querySelectorAll(".grid .col");
let addressBar = document.querySelector(".address-box");
for(let i=0; i<allCells.length;i++){
    allCells[i].addEventListener("click", function(){
        let rid = Number(allCells[i].getAttribute("rid"))+1;
        let cid = Number(allCells[i].getAttribute("cid"));
        let colAdd = String.fromCharCode(cid + 65);
        let address = colAdd+rid;
        addressBar.value=address;
    });
}
allCells[0].click();

let leftBtn = document.querySelector(".left");
let centerBtn = document.querySelector(".center");
let rightBtn = document.querySelector(".right");

leftBtn.addEventListener("click", function(){
    let address = addressBar.value;
    let { rid, cid} = getRCidFromAdress(address);
    console.log(rid +" "+ cid);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    console.log(cell);
    cell.style.textAlign = "left";
});


rightBtn.addEventListener("click", function(){
    let address = addressBar.value;
    let { rid, cid} = getRCidFromAdress(address);
    console.log(rid +" "+ cid);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    console.log(cell);
    cell.style.textAlign = "right";
});
centerBtn.addEventListener("click", function(){
    let address = addressBar.value;
    let { rid, cid} = getRCidFromAdress(address);
    console.log(rid +" "+ cid);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    console.log(cell);
    cell.style.textAlign = "center";
});

function getRCidFromAdress(address){
    let cellColAdr = address.charCodeAt(0);
    let cellRowAdr = address.slice(1);
    let cid = cellColAdr-65;
    let rid = Number(cellRowAdr)-1 ;
    return {rid, cid};
}
