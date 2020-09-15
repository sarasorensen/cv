//Menu for media queries
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

const offClick = () => {
  navbarLinks.classList.toggle("active");
  document.removeEventListener("click", offClick);
};

const handleClick = (event) => {
  event.stopPropagation();
  navbarLinks.classList.toggle("active");
  if (navbarLinks.classList.contains("active")) {
    document.addEventListener("click", offClick);
  }
};
toggleButton.addEventListener("click", handleClick);

//menu change color
var myNav = document.getElementById("navbar");
window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 80 ||
    document.documentElement.scrollTop >= 80
  ) {
    myNav.classList.add("scroll");
    topBtn.style.display = "block";
  } else {
    myNav.classList.remove("scroll");
    topBtn.style.display = "none";
  }
};

let btn = document.getElementById("CTA");

btn.addEventListener("click", function () {
  window.open("mailto:sarasorensen97@hotmail.com");
});
//scroll to resume
let button = document.getElementById("CTA2");

button.addEventListener("click", function (e) {
  document.getElementById("resume").scrollIntoView({ block: "center" });
  e.stopPropagation();
});

//Display for bigger image
function imageRow(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}
//Back to top button
const topBtn = document.getElementById("topButton");
topBtn.addEventListener("click", topButtonFunction);

function topButtonFunction() {
  let body = document.body;
  let html = document.documentElement;
  body.scrollTop = 0;
  html.scrollTop = 0;
}
