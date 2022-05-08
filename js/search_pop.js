// PC
// search_popup
"use strict";
function srchLoad() {
  const bod = document.querySelector("body");
  const head = document.querySelector("#header");
  const srchBtn = document.querySelector(".srch_on");
  const srchBox = document.querySelector("#srch_box");
  const closeBtn = document.querySelector(".srch_off");
  const back = document.querySelector("#backdrop");
  console.log(srchBtn);
  let offBox = () => { 
    srchBox.style.display = "none";
    back.classList.remove("is_active");
    bod.style.overflow = "";
    head.style.display = "block";
  }
  srchBtn.addEventListener("click", function () {
    srchBox.style.display = "block";
    back.classList.add("is_active");
    bod.style.overflow = "hidden";
    head.style.display = "none";
    back.addEventListener("click", offBox);
  });
  closeBtn.addEventListener("click", offBox);

}

window.addEventListener("load", srchLoad, false);


// mobile
function srchLoad2() {
  const bod = document.querySelector("body");
  const head = document.querySelector("#header");
  const srchBtn = document.querySelector(".srch_on");
  const srchBox = document.querySelector("#srch_box");
  const closeBtn = document.querySelector(".srch_off");
  const back = document.querySelector("#backdrop");
  console.log(srchBtn);
  let offBox = () => { 
    srchBox.style.display = "none";
    back.classList.remove("is_on");
    bod.classList.remove("mo");
    head.style.display = "block";
  }
  srchBtn.addEventListener("click", function () {
    srchBox.style.display = "block";
    back.classList.add("is_on");
    bod.classList.add("mo");
    head.style.display = "none";
    back.addEventListener("click", offBox);
  });
  closeBtn.addEventListener("click", offBox);

}

window.addEventListener("load", srchLoad2, false);
