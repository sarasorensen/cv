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

//Back to top button
function topButtonFunction() {
  let body = document.body;
  let html = document.documentElement;
  body.scrollTop = 0;
  html.scrollTop = 0;
}

const topBtn = document.getElementById("topButton");
topBtn.addEventListener("click", topButtonFunction);

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

const expandImg = document.getElementById("expandedImg");
const container = document.getElementById("container");
var expandtext = document.getElementById("expandedText");

var img1 = document.getElementById("got");
var img2 = document.getElementById("space");
const attribute = img1.getAttribute("data-attribute");

img1.onclick = function () {
  expandImg.parentElement.style.display = "block";
  expandImg.src = img1.src;
  expandtext.innerHTML = attribute;
};

img2.onclick = function () {
  expandImg.parentElement.style.display = "block";
  expandImg.src = img1.src;
  expandtext.innerHTML = attribute;
};

window.addEventListener("click", function (event) {
  if (event.target == container) {
    container.style.display = "none";
  }
});
