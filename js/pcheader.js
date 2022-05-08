// header background transparent <> #fff,
// menuopen
function hdtransLoad() {
  const hdInn = document.querySelector("#header_inner");
  const list = document.querySelectorAll(".gnb>ul>li");
  const boxOn = document.querySelectorAll(".gnb>ul>li>div");
  const back = document.querySelector("#backdrop");
    hdInn.addEventListener("mouseover", function () {
      hdInn.classList.add("is-active");
    });
    hdInn.addEventListener("mouseleave", function () {
      hdInn.classList.remove("is-active");
    });
  for (let k = 0; k < list.length; k++) {
    list[k].addEventListener("mouseover", function () {
      list[k].classList.add("pc");
      boxOn[k].classList.add("wrap", "on");
      back.classList.add("is_active");
    });
    list[k].addEventListener("mouseout", function () {
      boxOn[k].classList.remove("wrap", "on");
      back.classList.remove("is_active");
    });  
  }
}
window.addEventListener("load", hdtransLoad);


// KOR 클릭
function topmenuLoad() {
  const hdInn = document.querySelector("#header_inner");
  const Btn = document.querySelector("button.langBtn");
  const lang = document.querySelector("div.lang");
  let flag1 = true;
  console.log();
  Btn.addEventListener("click", function () {
    if (flag1) {
      Btn.classList.add("active");
      lang.classList.add("on");
      hdInn.classList.add("iswhite");
      flag1 = false;
    } else {
      Btn.classList.remove("active");
      lang.classList.remove("on");
      hdInn.classList.remove("iswhite");
      flag1 = true;
    }
  });
}
window.addEventListener("load", topmenuLoad);
