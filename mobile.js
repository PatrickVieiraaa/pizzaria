document.querySelector(".menuLogo").addEventListener("click", toggleMenu);
document.querySelector(".btnFechar").addEventListener("click", fecharMenu);

function toggleMenu() {
  let menu = document.querySelector(".menuMobile .menuTwo");
  menu.classList.add("menu-open");
  menu.style.display = "block";
}

function fecharMenu() {
  let botaoX = document.querySelector(".menuMobile .menuTwo");
  botaoX.classList.remove("menu-open");
  botaoX.style.display = "none";
}
