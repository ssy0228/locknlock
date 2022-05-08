// header background transparent <> #fff,
function hdtransLoad() {
  const wrap = document.querySelector("#head_wrap");
  const hdInn = document.querySelector("#head_inner");
  wrap.addEventListener("mouseover", function opn() {
    hdInn.classList.add("is-active");
  });
  wrap.addEventListener("mouseout", function cls() {
    hdInn.classList.remove("is-active");
  });

}
window.addEventListener("load", hdtransLoad);

// KOR 클릭

function topmenuLoad() {
  const wrap = document.querySelector("#head_wrap");
  const hdInn = document.querySelector("#head_inner");
  const Btn = document.querySelector("button.langBtn");
  const lang = document.querySelector("div.lang");
  let flag1 = true;
console.log()
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



//주메뉴 꺼내기
function menuLoad() {
  const hdInn = document.querySelector("#head_inner");
  const liOn = document.querySelectorAll(".gnb>ul>li");
  const back = document.querySelector("#backdrop1");
  console.log(liOn); //5
  for (let k = 0; k < liOn.length; k++) {
    liOn[k].addEventListener("mouseover", function opn() {
      hdInn.classList.add("is-active");
      liOn[k].classList.add("on");
      back.classList.add("is_active");
    });
    liOn[k].addEventListener("mouseout", function cls() {
      hdInn.classList.remove("is-active");
      liOn[k].classList.remove("on");
      back.classList.remove("is_active");
    });
  }
  back.classList.remove("is_active");
}
window.addEventListener("load", menuLoad);


