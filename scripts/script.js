// JavaScript Document
console.log("hi");




// collapsible working?
// bron: https://www.w3schools.com/howto/howto_js_collapsible.asp
// var coll = document.getElementsByClassName("collapsible");
// var i;

// console.log(coll);

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");

//     var contentCollapsible = this.nextElementSibling;
//     if (contentCollapsible.style.display === "block") {
//         contentCollapsible.style.display = "none";
//     } else {
//         contentCollapsible.style.display = "block";
//     }
//   });
// }

// end copyright
var fold = document.getElementById("collapsible");
var inhoud = document.getElementById("contentCollapsible");

fold.addEventListener("click", displaycontent);

function displaycontent(){
    console.log("shit works, surprisingly")
    inhoud.classList.toggle("hide")
}