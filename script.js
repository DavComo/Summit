function toggleResponsive() {
  var x = document.getElementById("topNav");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("topNav").style = "height: 300px;";
  } else {
    x.className = "topnav";
    document.getElementById("topNav").style = "height: 60px;";
  }
}

document.addEventListener("scroll", () => {
  if (document.body.scrollTop >= 20) {
    document.getElementById("topNav").style = "height: 60px;";
  } else {
    document.getElementById("topNav").style = "height: 300px;"
  }
});