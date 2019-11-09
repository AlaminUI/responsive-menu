
  var displayMenu= document.getElementById("displayMenu");
  var x = document.getElementById("mobile-menu");
   displayMenu.addEventListener("click",function(){
    x.classList.toggle("menu-block");
    console.log("working")
   })

var menu=document.querySelector(".menu-icon");
var icon1=document.querySelector(".first-icon");
var icon2=document.querySelector(".secound-icon");
var icon3=document.querySelector(".third-icon");

menu.addEventListener("click",function(){
   icon2.classList.toggle("none");
  icon1.classList.toggle("icon");
   icon3.classList.toggle("icons");
})