// JavaScript Document
console.log("hi");

//  bron: https://www.w3schools.com/howto/howto_js_accordion.asp
var acc = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling; 
        var turning = this.querySelector(".OverOnsPijltje")
        console.log(turning);
        turning.classList.toggle("draai");
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

console.log(i);


// dit is weer eigen code


// code voor burgermenu
var menu = document.querySelector(".burger");
var inhoud = document.querySelector(".contentCollapsible");

console.log(menu);
menu.addEventListener("click", displaycontent)


function displaycontent() {
    console.log("menu works")
    inhoud.classList.toggle("visable")
    menu.classList.toggle("kruisje")
}


// code voor dark/lightmode
var cycle = document.querySelector(".night");

cycle.addEventListener("click", dawn);
function dawn(){
    console.log("het word nacht in wakkerdam");
}

// animaties invoegen