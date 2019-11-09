
  var displayMenu= document.getElementById("displayMenu");
  var mobileMenu = document.getElementById("mobile-menu");
   displayMenu.addEventListener("click",function(){
    mobileMenu.classList.toggle("menu-block");
    console.log("working")
   })

// humberg menu icon
var menu=document.querySelector(".menu-icon");
var icon1=document.querySelector(".first-icon");
var icon2=document.querySelector(".secound-icon");
var icon3=document.querySelector(".third-icon");
menu.addEventListener("click",function(){
   icon2.classList.toggle("toggle-none");
  icon1.classList.toggle("toggle-icon");
   icon3.classList.toggle("toggle-icons");
})


// scroll top border change

  var navBar = document.querySelector("#navBar");
 window.onscroll = function() {scrollFunction()};
mobileMenu.classList.add("mobile-border");
function scrollFunction() {
  if (document.body.scrollTop > navBar.offsetHeight || document.documentElement.scrollTop > navBar.offsetHeight) {
    navBar.classList.add("navbar-full-border");
    mobileMenu.classList.remove("mobile-border");
  } else {
      navBar.classList.remove("navbar-full-border");
        mobileMenu.classList.add("mobile-border");
  }
}
