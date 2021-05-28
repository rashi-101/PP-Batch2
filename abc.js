function play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
  }

  setInterval(function(){
    let search = document.getElementsByClassName("pin-search-btn district-search md button button-solid ion-activatable ion-focusable hydrated")[0];
    search.click();
setTimeout(function(){
   let epl = document.querySelector("#main-content > app-appointment-table > ion-content > div > div > ion-grid > ion-row > ion-grid > ion-row > ion-col > ion-grid > ion-row > ion-col:nth-child(2) > form > ion-grid > ion-row:nth-child(2) > ion-col:nth-child(1) > div > div:nth-child(1) > label");
    epl.click();
    let items = document.querySelectorAll(".slot-available-wrap li div div  a");
    for(let i=0; i<items.length; i++){
        if(Number(items[i].innerText) <=200){
            play();
        }
    }},2000);
  },30000);

  
  