const q = console.log;

const landingPage = document.getElementById("landingPage");

function check() {
  if (landingPage.getBoundingClientRect().top < -300) {
    document.getElementById("nav").classList.add("nav2");
  } else {
    document.getElementById("nav").classList.remove("nav2");
  }
  q(landingPage.getBoundingClientRect().top);
}
