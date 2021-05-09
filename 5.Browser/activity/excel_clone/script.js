let underlineBtn = document.querySelector(".underline");
let italicsBtn = document.querySelector(".italics");
let plus_container = document.querySelector(".plus-container");
let sheet_list = document.querySelector(".sheet-list");
let boldBtn = document.querySelector(".bold");
let align = document.querySelectorAll(".alignment-container>*");
let leftBtn = document.querySelector(".left");
let centerBtn = document.querySelector(".center");
let rightBtn = document.querySelector(".right");
let sheetDb= workSheetDb[0];
let allCells = document.querySelectorAll(".grid .col");
let addressBar = document.querySelector(".address-box");
let formulaInput = document.querySelector(".formula-box");

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
    initCurrentSheetDb();
});

sheet_list.addEventListener("click", function(e){
    let mySheet = e.target;
    let allSheet = e.currentTarget;
    // console.log(allSheet.children[0]);
    
    for(let i=0; i<allSheet.children.length; i++){
        allSheet.children[i].classList.remove("active-sheet");
    }
    mySheet.classList.add("active-sheet");

    initUi();

});

function initUi(){
    for(let i=0; i<allCells.length; i++){
        allCells[i].innerHTML="";
    }
}


//get address from the cell when clicked on cell

for(let i=0; i<allCells.length;i++){
    allCells[i].addEventListener("click", function(){
        let rid = Number(allCells[i].getAttribute("rid"));
        let cid = Number(allCells[i].getAttribute("cid"));
        let colAdd = String.fromCharCode(cid + 65);
        let rowAdd = rid+1;
        let address = colAdd+rowAdd;
        addressBar.value=address;
        addressBar.style.textAlign = "center";
        addressBar.style.border = "thick solid gray";

        //highlightting format options

        let cellObj = sheetDb[rid][cid];

        //alignment
        for(let i=0; i<align.length; i++){
            align[i].classList.remove("active-btn");
        }
        if(cellObj.halign=="left"){
            leftBtn.classList.add("active-btn");
        } else if(cellObj.halign=="center"){
            centerBtn.classList.add("active-btn");
        } else if(cellObj.halign=="right"){
            rightBtn.classList.add("active-btn");
        }

        //font
        if(cellObj.bold==true){
            boldBtn.classList.add("active-btn");
        }else{
            boldBtn.classList.remove("active-btn");
        }
        if(cellObj.italic==true){
            italicsBtn.classList.add("active-btn");
        }else{
            italicsBtn.classList.remove("active-btn");
        }
        if(cellObj.underline==true){
            underlineBtn.classList.add("active-btn");
        }else{
            underlineBtn.classList.remove("active-btn");
        }
    });
}
allCells[0].click();


//alignment change

leftBtn.addEventListener("click", function(){
    let address = addressBar.value;
    let {rid ,cid} = getRCidFromAdress(address);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.textAlign = "left";
    for(let i=0; i<align.length; i++){
            align[i].classList.remove("active-btn");
    }
    leftBtn.classList.add("active-btn");
    let cellObj = sheetDb[rid][cid];
    cellObj.halign="left";

});
rightBtn.addEventListener("click", function(){
    let address = addressBar.value;
    let {rid ,cid} = getRCidFromAdress(address);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.textAlign = "right";
    for(let i=0; i<align.length; i++){
        align[i].classList.remove("active-btn");
}
rightBtn.classList.add("active-btn");
let cellObj = sheetDb[rid][cid];
cellObj.halign="right";
});
centerBtn.addEventListener("click", function(){
    let address = addressBar.value;
    let {rid ,cid} = getRCidFromAdress(address);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.textAlign = "center";
    for(let i=0; i<align.length; i++){
        align[i].classList.remove("active-btn");
}
centerBtn.classList.add("active-btn");
let cellObj = sheetDb[rid][cid];
cellObj.halign="center";
});

//helper function to get cell from its address
function getRCidFromAdress(address){
    let cellColAdr = address.charCodeAt(0);
    let cellRowAdr = address.slice(1);
    let cid = cellColAdr-65;
    let rid = Number(cellRowAdr)-1 ;
    // let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    return { rid, cid};
}

//bold-italics-underline
boldBtn.addEventListener("click", function(){
    let address = addressBar.value;
    let {rid ,cid} = getRCidFromAdress(address);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    let cellObj = sheetDb[rid][cid];
    if(cellObj.bold===true){
        cell.style.fontWeight="normal";
        boldBtn.classList.remove("active-btn");
        cellObj.bold=false;
    }else{
        cell.style.fontWeight="bold";
        boldBtn.classList.add("active-btn");
        cellObj.bold=true;
    }
   // cell.style.fontWeight = cell.style.fontWeight=="bold"? "normal":"bold";
});
italicsBtn.addEventListener("click", function(){
    let address = addressBar.value;
    let {rid ,cid} = getRCidFromAdress(address);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    let cellObj = sheetDb[rid][cid];
    if(cellObj.italic===true){
        cell.style.fontStyle="normal";
        italicsBtn.classList.remove("active-btn");
        cellObj.bold=false;
    }else{
        cell.style.fontStyle="italic";
        italicsBtn.classList.add("active-btn");
        cellObj.italic=true;
    }
   // cell.style.fontStyle =cell.style.fontStyle== "italic"?"normal":"italic";
});
underlineBtn.addEventListener("click", function(){
    let address = addressBar.value;
    let {rid ,cid} = getRCidFromAdress(address);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    let cellObj = sheetDb[rid][cid];
    if(cellObj.underline===true){
        cell.style.fontStyle="normal";
        underlineBtn.classList.remove("active-btn");
        cellObj.underline=false;
    }else{
        cell.style.fontStyle="italic";
        underlineBtn.classList.add("active-btn");
        cellObj.underline=true;
    }
    // cell.style.textDecoration = cell.style.textDecoration=="underline"?"none":"underline";
});


//font size change
let fontSizeDD = document.querySelector(".font-size");
fontSizeDD.addEventListener("change",function(){
    let address = addressBar.value;
    let fSize = fontSizeDD.value;
    let {rid ,cid} = getRCidFromAdress(address);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.fontSize=fSize+"px";
});
//cell font color
let fontColor = document.querySelector("#color");
fontColor.addEventListener("change", function(){
    let address = addressBar.value;
    let {rid ,cid} = getRCidFromAdress(address);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    let font_color = fontColor.value;
    cell.style.color = font_color;
});
//cell bg color
let cellBgColor = document.querySelector("#bg-color");
cellBgColor.addEventListener("change", function(){
    let address = addressBar.value;
    let {rid ,cid} = getRCidFromAdress(address);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    let bg_color = cellBgColor.value;
    cell.style.backgroundColor = bg_color;
});

//excel theme change
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

//font family
let fontFam = document.querySelector(".font-family");
fontFam.addEventListener("change", function(){
    let address = addressBar.value;
    let {rid ,cid} = getRCidFromAdress(address);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    let font = fontFam.value;
    cell.style.fontFamily = font;
});

//  

// function setDB(sheetDb){
//     for(let i=0; i<sheetDb.length;i++){
//         for(let j=0; j<sheetDb[i].length; j++){
//             let cell = document.querySelector(`.col[rid="${i}"][cid="${j}"]`);
//             let {bold, italics, underline, fontFamily, fontSize, halign, value}=sheetDb;
//             cell.style.fontStyle
//         }
//     }
// }

for(let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener("blur", function handleCell() {
        let address = addressBar.value;
        let { rid, cid } = getRCidFromAdress(address);
        let cellObject = sheetDb[rid][cid];
        let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
        cellObject.value = cell.innerText;
        changeChildren(cellObject);
    });
}

formulaInput.addEventListener("keydown", function(e){
    let formula = formulaInput.value;
    if(e.key=="Enter" && formulaInput.value != ""){
        //evaluate formula
        let evalValue = evaluate(formula);
        //console.log(evalValue);

        //put evaluated value on ui
        let address = addressBar.value;
        let { rid, cid } = getRCidFromAdress(address);
        setUIByFormula(evalValue, rid, cid);

        //put evaluated value in db
        setValInDb(evalValue, rid, cid, formula, address);
    }
});

function setValInDb(val, rid, cid, formula, address){
    let cell = sheetDb[rid][cid];
    cell.value = val;
    cell.formula=formula;
    // for(let i=0; i<formulaTokens.length; i++){
    //     let firstCharOfToken = formulaTokens[i].charCodeAt(0);
    //     if(firstCharOfToken >= 65 && firstCharOfToken<=90){
    //         //console.log(formulaTokens[i]);
    //         let { rid, cid } = getRCidFromAdress(formulaTokens[i]);
    //         let cellObj = sheetDb[rid][cid];
    //         let { value } = cellObj;
    //         //put cell values in formula-string
    //         formula = formula.replace(formulaTokens[i],value);
    //     }
    // }
}
function setUIByFormula(val, rid, cid){
    document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`).innerText=val;
}

function evaluate(formula){
    //split on the basis of space// ( A1 + A2 ) ---> [(,A1,+,A2,)]
    let formulaTokens = formula.split(" ");
    //get A1 A2 value
    for(let i=0; i<formulaTokens.length; i++){
        let firstCharOfToken = formulaTokens[i].charCodeAt(0);
        if(firstCharOfToken >= 65 && firstCharOfToken<=90){
            //console.log(formulaTokens[i]);
            let { rid, cid } = getRCidFromAdress(formulaTokens[i]);
            let cellObj = sheetDb[rid][cid];
            let { value } = cellObj;
            //put cell values in formula-string
            formula = formula.replace(formulaTokens[i],value);
        }
    }
    console.log(formula);
    
    //evaluate formula expression
    let ans = eval(formula);

    //return evaluated value
    return ans;
}


function changeChildren(cellObj){
    let children = cellObj.children;
    for(let i=0; i<children.length; i++){
        let chAddress = children[i];
        let chridCid = getRCidFromAdress(chAddress);
        let chObj = sheetDb[chridCid.rid][chridCid.cid];
        let formula = chObj.formula;
        let evalVal = evaluate(formula);
        setUIByFormula(evalVal, chridCid.rid, chridCid.cid);
        setValInDb(evalVal, chridCid.rid, chridCid,cid, formula, chAddress);
        //changing dependents of dependent
        changeChildren(chObj);
    }
}