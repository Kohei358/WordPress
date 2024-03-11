const targetImg = document.querySelector("#img")

$('#btn_02').on("mouseover", () => {
  targetImg.src = 'images/btn_02-1.png';
});
$('#btn_02').on("mouseleave", () => {
  targetImg.src = 'images/btn_02.png';
});

const menu = document.querySelector(".top-nav-sp");
menu.classList.remove("showMenu");
const toggleBtn = document.querySelector("#toggleBtn");
const closeBtn = document.querySelector("#closeBtn");

toggleBtn.addEventListener("click", e => toggleMenu(e));
closeBtn.addEventListener("click",e=>closeMenu(e));

console.log(menu);
function toggleMenu(e) {
  if(e.target.id == "toggleBtn"){
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      menu.style.display = "none";
    }
    else {
      menu.classList.add("showMenu");
      menu.style.display = "block";
    }
  }
}
function closeMenu(e) {
  menu.classList.remove("showMenu");
  menu.style.display = "none";
}
