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



let workSheetDb=[];
function initCurrentSheetDb(){
    let sheetDb = [];
    for(let i=0; i<100; i++){
        let row =[];
        for(let j=0; j<26; j++){
                let cell={
                    bold:false,
                    italic:false,
                    underline:false,
                    halign:"left",
                    fontFamily:"Arial",
                    fontSize:"10",
                    value:""
                }
                row.push(cell);
        }
        sheetDb.push(row);
    }
    workSheetDb.push(sheetDb);
}
initCurrentSheetDb();
console.log(workSheetDb);