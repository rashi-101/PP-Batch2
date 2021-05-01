let filter = document.querySelectorAll(".filter");
let main_container = document.querySelector(".main-container");
filter[0].addEventListener("click", function(){
    console.log("gey");
    console.log(JSON.stringify(filter[0].children[0].classList[0]));
    main_container.classList[1]=(JSON.stringify(filter[0].children[0].classList[0]));
})