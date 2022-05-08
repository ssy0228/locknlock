'use strict';
//topmenu
function topmenuLoad() {
  let wrap = document.getElementById("head_wrap");
  let hdInn = document.getElementById("head_inner");
  let Btn = document.getElementsByClassName("langBtn");
  let lang = document.getElementById("lang");
  let flag1 = true;
  
  for (let i = 0; i < Btn.length; i++) {
    Btn[i].addEventListener("click", function () {
      if (flag1) {
        Btn[i].classList.add("active");
        lang.style.display = "block";
        flag1 = false;
      } else {
        Btn[i].classList.remove("active");
        lang.style.display = "none";
        flag1 = true;
      }
    });
  }
}

window.addEventListener("load", topmenuLoad, false);  


//foot_family
function famLoad() {
  let liOn = document.getElementById("list");
  let btn = document.getElementById("siteBtn");
  let famLi = liOn.getElementsByTagName("ul");
  let flag = true;
  for (let k = 0; k < famLi.length; k++) {
    famLi[k].style.display = "none";
  }
  btn.addEventListener("click", function () {
    if (flag) {
      for (let k = 0; k < famLi.length; k++) {
        btn.children[0].style.transform = "rotate(180deg)";
        famLi[k].style.display = "block";
      }
      flag = false;
    } else {
      for (let k = 0; k < famLi.length; k++) {
        btn.children[0].style.transform = "rotate(0deg)";
        famLi[k].style.display = "none";
      }
      flag = true;
    }
  });
}

window.addEventListener("load", famLoad, false);
