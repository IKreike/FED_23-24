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
        var panel = this.nextElementSibling; // this.classList.toggle("active");

        if (panel.style.display === "block") {
            panel.style.display = "none";
            // pijltje.style.msTransform = "rotate(90deg)"
        } else {
            panel.style.display = "block";
            // pijltje.classList.toggle("draai");
            // pijltje.style.transform = "rotate(90deg)"
        }
    });
}


// var acc = document.getElementsByClassName("harmonica");
// var i;
// console.log(acc)

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }







// var pijltje = document.querySelectorAll(".overOnsButton")
// console.log(pijltje);
// pijltje.addEventListener("click", draaien);
// function draaien(){
// pijltje.style.transform = "rotate(90deg)"
// }


var menu = document.querySelector(".burger");
var inhoud = document.querySelector(".contentCollapsible");

console.log(menu);
menu.addEventListener("click", displaycontent)


function displaycontent() {
    console.log("menu works")
    inhoud.classList.toggle("visable")
}


// animaties invoegen