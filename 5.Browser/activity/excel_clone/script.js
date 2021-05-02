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

let allCells = document.querySelectorAll(".grid .col");
let addressBar = document.querySelector(".address-box");

for(let i=0; i<allCells.length;i++){
    allCells[i].addEventListener("click", function(){
        let rid = Number(allCells[i].getAttribute("rid"))+1;
        let cid = Number(allCells[i].getAttribute("cid"));
        let colAdd = String.fromCharCode(cid + 65);
        let address = colAdd+rid;
        addressBar.value=address;
        addressBar.style.textAlign = "center";
        addressBar.style.border = "thick solid gray";
    });
}
allCells[0].click();

let leftBtn = document.querySelector(".left");
let centerBtn = document.querySelector(".center");
let rightBtn = document.querySelector(".right");

leftBtn.addEventListener("click", function(){
    let address = addressBar.value;
    let cell = getRCidFromAdress(address);
    cell.style.textAlign = "left";
});


rightBtn.addEventListener("click", function(){
    let address = addressBar.value;
    let cell= getRCidFromAdress(address);
    cell.style.textAlign = "right";
});
centerBtn.addEventListener("click", function(){
    let address = addressBar.value;
    let cell = getRCidFromAdress(address);
    cell.style.textAlign = "center";
});

function getRCidFromAdress(address){
    let cellColAdr = address.charCodeAt(0);
    let cellRowAdr = address.slice(1);
    let cid = cellColAdr-65;
    let rid = Number(cellRowAdr)-1 ;
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    return cell;
}

let boldBtn = document.querySelector(".bold");
boldBtn.addEventListener("click", function(){
    let address = addressBar.value;
    let cell = getRCidFromAdress(address);
    cell.style.fontWeight = cell.style.fontWeight=="bold"? "normal":"bold";
});

let italicsBtn = document.querySelector(".italics");
italicsBtn.addEventListener("click", function(){
    let address = addressBar.value;
    let cell = getRCidFromAdress(address);
    cell.style.fontStyle =cell.style.fontStyle== "italic"?"normal":"italic";
});

let underlineBtn = document.querySelector(".underline");
underlineBtn.addEventListener("click", function(){
    let address = addressBar.value;
    let cell = getRCidFromAdress(address);
    cell.style.textDecoration = cell.style.textDecoration=="underline"?"none":"underline";
});

let fontSizeDD = document.querySelector(".font-size");
fontSizeDD.addEventListener("change",function(){
    let address = addressBar.value;
    let fSize = fontSizeDD.value;
    let cell = getRCidFromAdress(address);
    cell.style.fontSize=fSize+"px";
});

let fontColor = document.querySelector("#color");
fontColor.addEventListener("change", function(){
    let address = addressBar.value;
    let cell = getRCidFromAdress(address);
    let font_color = fontColor.value;
    cell.style.color = font_color;
});
let cellBgColor = document.querySelector("#bg-color");
cellBgColor.addEventListener("change", function(){
    let address = addressBar.value;
    let cell = getRCidFromAdress(address);
    let bg_color = cellBgColor.value;
    cell.style.backgroundColor = bg_color;
});

let themeSelect = document.querySelector(".theme-select");
let menuContainer = document.querySelector(".menu-container");
let leftColB= document.querySelectorAll(".left-col_box");

// let topRow = document.querySelector(".top-row");
for(let i=0; i<themeSelect.children.length; i++){
    themeSelect.children[i].addEventListener("click", function(){
        let color=themeSelect.children[i].classList[1];
        menuContainer.style.backgroundColor=color;
        topRow.style.backgroundColor=color;
        leftColB.forEach(function(col){
            col.style.backgroundColor=color;
        });
        document.querySelector(".icon").style.color =color;
    })
    
}

let fontFam = document.querySelector(".font-family");
fontFam.addEventListener("change", function(){
    let address = addressBar.value;
    let cell = getRCidFromAdress(address);
    let font = fontFam.value;
    cell.style.fontFamily = font;
});