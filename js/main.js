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
// $(document).ready(function(){

//   var stopAutohide;

//   function showWindow() {
//     $("#main-popup").show();
//     // stop scroll
//     $("html body").css("overflow", "hidden");
//     // auto hide after 5sec
//     stopAutohide = setTimeout(hideWindow, 5000);
//   }

//   //showWindow()
//   function hideWindow() {
//     $("#main-popup").hide();
//     // on scroll
//     $("html body").css("overflow", "scroll");

// }
// //hideWindow()

// // now call function automatically after some time

// // auto open after 2s

// setTimeout(showWindow, 2000);

// // close after click

// $("#btn-green").click(function(){

//   hideWindow();
//   clearTimeout(stopAutohide);
//   window.open(URL: "https://iqbal-arif.github.io/ncf.github.io/")

// })

// Pop-up JS with Jquery

jQuery(document).ready(function ($) {
  if (sessionStorage.getItem("advertOnce") !== "true") {
    //sessionStorage.setItem('advertOnce','true');
    $("#pop-up").show();
  } else {
    $("#pop-up").hide();
  }

  $("#refresh-page").on("click", function () {
    $("#pop-up").hide();
    sessionStorage.setItem("advertOnce", "true");
  });

  $("#reset-session").on("click", function () {
    $("#pop-up").show();
    sessionStorage.setItem("advertOnce", "");
  });
});
