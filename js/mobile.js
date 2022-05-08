




//mobile category popup button
function mgnbopncls() {
  const openBtn = document.querySelector("button.burger");
  const all = document.querySelector("body");
  const hdMn = document.querySelector("#header_menu");
  const back = document.querySelector("#backdrop");

  let toggler = () => {
    all.classList.toggle("mo");
    hdMn.classList.toggle("mo");
    openBtn.classList.toggle("close");
    back.classList.toggle("is_on");
  };

  let remover = () => {
    all.classList.remove("mo");
    hdMn.classList.remove("mo");
    openBtn.classList.remove("close");
    back.classList.remove("is_on");
  };

  openBtn.classList.remove("close");
  openBtn.addEventListener("click", function () {
    toggler();
    back.addEventListener("click", remover, false);
  });
}

window.addEventListener("load", mgnbopncls);
