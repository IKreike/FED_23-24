// JavaScript Document
console.log("hi");

//  bron: https://www.w3schools.com/howto/howto_js_accordion.asp
var acc = document.getElementsByClassName("collapsible");
var i;

console.log(acc);

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling; 
        // console.log(panel);
        var turning = this.querySelector(".OverOnsPijltje")
        // console.log(turning);
        this.classList.toggle("active");
        console.log(this);
        turning.classList.toggle("draai");
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

console.log(i);
// dit is voor de menuknoppen, omdat het een andere animatie moet zijn



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
var alles = document.querySelector("body");

var accButton = document.querySelector(".accDark");
var searchButton = document.querySelector(".searchDark");
// var accButton = document.querySelector(".Dark");

console.log(alles);
// console.log(nightButton);

cycle.addEventListener("click", dawn);
function dawn(){
    console.log("het word nacht in wakkerdam");
    alles.classList.toggle("darkMode");

    cycle.classList.toggle("cycleDay");
    accButton.classList.toggle("userDay");
    searchButton.classList.toggle("searchDay");
    menu.classList.toggle("day");
}


// subPagina "toegankelijkheid" in menu
var toegang = document.querySelector(".toegang");
var accespage = document.querySelector(".accesibility")

toegang.addEventListener("click", toegangPage);

function toegangPage(){
    console.log("toegangspagina")
    accespage.classList.toggle("hidden")
}

// fontgrootte veranderen
var kleinFont = document.querySelector(".fontKlein");
var middelFont = document.querySelector(".fontMiddel");
var grootFont = document.querySelector(".fontGroot");

kleinFont.addEventListener("click", kleinFontToggle);
function kleinFontToggle(){
    alles.classList.add("kleinFontAAN");
    alles.classList.remove("middelFontAAN");
    alles.classList.remove("grootFontAAN");
    console.log("kleine letters");
    accespage.classList.toggle("hidden");
    inhoud.classList.toggle("visable")
    menu.classList.toggle("kruisje")
}

middelFont.addEventListener("click", middelFontToggle);
function  middelFontToggle(){
    alles.classList.add("middelFontAAN");
    alles.classList.remove("kleinFontAAN");
    alles.classList.remove("grootFontAAN");
    console.log("middel letters");
    accespage.classList.toggle("hidden");
    inhoud.classList.toggle("visable")
    menu.classList.toggle("kruisje")
}

grootFont.addEventListener("click", grootFontToggle);
function  grootFontToggle(){
    alles.classList.add("grootFontAAN");
    alles.classList.remove("kleinFontAAN");
    alles.classList.remove("middelFontAAN");
    console.log("grote letters");
    accespage.classList.toggle("hidden");
    inhoud.classList.toggle("visable")
    menu.classList.toggle("kruisje")
}
// animaties invoegen





// prefers color scheme
// @media (prefers-c)
if (window.matchMedia){
    console.log("continue");
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches){
    console.log("shdflohawekfnl");
    dawn();
}
//https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript