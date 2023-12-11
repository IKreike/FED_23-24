// JavaScript Document
console.log("hi");

// dit is de methode die ik zelf gebruikte, maar dit was niet op een manier schaalbaar wat handig was. miss voor header menu?
// var fold = document.querySelector(".collapsible");
// var inhoud = document.querySelector(".contentCollapsible");

// fold.addEventListener("click", displaycontent);


// function displaycontent(){
//     console.log("shit works, surprisingly")
//     inhoud.classList.toggle("hide")
// }


// https://www.w3schools.com/howto/howto_js_accordion.asp
var acc = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}




var menu = document.querySelector(".burger");
var inhoud = document.querySelector(".contentCollapsible");

console.log(menu);
menu.addEventListener("click", displaycontent)


function displaycontent() {
    console.log("menu works")
    inhoud.classList.toggle("hide")
}


// animaties invoegen