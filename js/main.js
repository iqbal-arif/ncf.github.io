// Sticky menu background
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// Pop-up Modal
$(document).ready(function(){

  var stopAutohide;

  function showWindow() {
    $("#main-popup").show();
    // stop scroll
    $("html body").css("overflow", "hidden");
    // auto hide after 5sec
    stopAutohide = setTimeout(hideWindow, 5000);
  }

  //showWindow()
  function hideWindow() {
    $("#main-popup").hide();
    // on scroll
    $("html body").css("overflow", "scroll");
    
}
//hideWindow()

// now call function automatically after some time

// auto open after 2s

setTimeout(showWindow, 2000);


// close after click

$("btn-green").click(function(){

  hideWindow();
  clearTimeout(stopAutohide);
  
})


// Hover on touch devices

// (function () {
//   "use strict";

//   if (!("addEventListener" in window)) {
//     return;
//   }

//   var htmlElement = document.querySelector(".hover-active");

//   function touchStart() {
//     htmlElement.classList.remove("hover-active");

//     htmlElement.removeEventListener("touchstart", touchStart);
//   }

//   htmlElement.addEventListener("touchstart", touchStart);
// })();
