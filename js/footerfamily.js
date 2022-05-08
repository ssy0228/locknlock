//pc ver family site
function famLoad() {
  let btn = document.querySelector("#foot_family>button");
  let famLi = document.querySelector("#foot_family>div");
  btn.addEventListener("click", function () {
    this.classList.add("pc");    
    famLi.classList.add("pc");
    this.classList.toggle("on");
    famLi.classList.toggle("on");
  });
}

window.addEventListener("load", famLoad, false);
