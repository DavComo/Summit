function toggleResponsive() {
  var x = document.getElementById("topNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.addEventListener("scroll", () => {
  if (document.body.scrollTop >= 50) {
    document.getElementById("topNav").style = "height: 60px;";
  } else {
    document.getElementById("topNav").style = "height: 300px;"
  }
});