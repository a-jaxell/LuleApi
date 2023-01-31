function hamburger() {
    let hamburgerIcon = document.querySelector("#hamburger-icon");
    let mainNavShow = document.querySelector(".main-nav");
    if (hamburgerIcon.getAttribute("src") == "/LuleNorthernLightsCinema/static/hamburger-icon.svg") {
      hamburgerIcon.setAttribute("src", "/LuleNorthernLightsCinema/static/close-icon.svg");
      mainNavShow.classList.add("show");
    } else {
      hamburgerIcon.setAttribute("src", "/LuleNorthernLightsCinema/static/hamburger-icon.svg");
      mainNavShow.classList.remove("show");
    }
  }
  