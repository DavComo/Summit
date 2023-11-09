function toggleResponsive() {
  var x = document.getElementById("topNav");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("topNav").style = "height: 300px; z-index: 50;";
  } else {
    x.className = "topnav";
    document.getElementById("topNav").style = "height: 60px; z-index: 50;";
  }
}

document.addEventListener("scroll", () => {
  if (document.body.scrollTop >= 50) {
    document.getElementById("topNav").style = "height: 60px; z-index: 50";
  } else {
    document.getElementById("topNav").style = "height: 350px;"
  }
});