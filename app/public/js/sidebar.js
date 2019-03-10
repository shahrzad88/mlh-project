let openNav = () => {
  document.querySelector("#mySidebar").style.width = "250px";
  document.querySelector(".toggle-btn").style.marginLeft = "250px";
};

let closeNav = () => {
  document.querySelector("#mySidebar").style.width = "0";
  document.querySelector(".toggle-btn").style.marginLeft = "0";
};

window.addEventListener("load", () => {
  document.querySelector(".openbtn").addEventListener("click", openNav);
  document.querySelector(".closebtn").addEventListener("click", closeNav);
});
