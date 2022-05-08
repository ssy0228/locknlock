"use strict";
function mobile() {
  let size = document.documentElement.clientWidth;
  const link = document.querySelectorAll("a.link");
  console.log(size);
  console.log(link);
  link.forEach((item) => {
    if ( size >= 0 && size <= 968 ) {
      (event) => { 
        event.preventDefault();
      }
    } else {
      item.getAttribute("href");
    };
  });
}

window.addEventListener("load", mobile);

// nav multi accordion
function multiNav() {
  const nav1Btn = document.querySelectorAll(".mgnb>ul>li>a.link");
  const nav2Btn = document.querySelectorAll(".mgnb>ul>li:nth-of-type(2)>div>ul>li>a.link");
  console.log(nav2Btn);
  let flag2 = true;
  let flag3 = true;
  for (let k = 0; k < nav1Btn.length; k++) {
    const papa = nav1Btn[k].parentElement;
    const bro = nav1Btn[k].nextElementSibling;
    let selectedBtn = () => {
      nav1Btn[k].classList.remove("mob");
      papa.classList.remove("act");
      bro.classList.remove("act");
    };
    let toggler = () => {
      nav1Btn[k].classList.toggle("mob");
      papa.classList.toggle("act");
      bro.classList.toggle("act");
    };
    console.log(papa);
    console.log(bro);
    nav1Btn[k].addEventListener("click", function () {
      for (let i = 0; i < nav1Btn.length; i++) {
        let unSelectBtn = () => {
          if (this != nav1Btn[i]) {
            nav1Btn[i].classList.remove("mob");
            nav1Btn[i].parentElement.classList.remove("act");
            nav1Btn[i].nextElementSibling.classList.remove("act");
          }
        };
        if (flag2 != true) {
          selectedBtn();
          unSelectBtn();
        } else {
          unSelectBtn();
        }
      }
      toggler();
    });
  }
  for (let a = 0; a < nav2Btn.length; a++) {
    const mama = nav2Btn[a].parentElement;
    const sis = nav2Btn[a].nextElementSibling;
    console.log(mama);
  console.log(sis);
    let subSelected = () => {
      nav2Btn[a].classList.remove("mo");
      mama.classList.remove("mo");
      sis.classList.remove("acton");
    };
    let toggling = () => {
      nav2Btn[a].classList.toggle("mo");
      mama.classList.toggle("mo");
      sis.classList.toggle("acton");
    };
    nav2Btn[a].addEventListener("click", function () {
      
      for (let b = 0; b < nav2Btn.length; b++) {
        let subUnselected = () => {
          if (this != nav2Btn[b]) {
            nav2Btn[b].classList.remove("mo");
            nav2Btn[b].parentElement.classList.remove("mo");
            nav2Btn[b].nextElementSibling.classList.remove("acton");
          }
        };
        if (flag3 != true) {
          subSelected();
          subUnselected();
        } else {
          subUnselected();
        }
      }
      toggling();
    });
  }
}

window.addEventListener("load", multiNav);

// mobile accordion footer sitemap
function footAcc1() {
  // div로 감싸고 애니메이션 추가 ul, li에
  const btn = document.querySelectorAll(".foot_sitemap>ul>li>a");
  //선택될 children = [0]클릭 [1]오픈
  let flag = true;
  for (let k = 0; k < btn.length; k++) {
    const text = btn[k].nextElementSibling;
    const bk = btn[k].parentElement;
    console.log(text);
    console.log(bk);
    btn[k].addEventListener("click", function () {
      for (let i = 0; i < btn.length; i++) {
        let remover = () => {
          if (this != btn[i]) {
            btn[i].classList.remove("mo");
            btn[i].nextElementSibling.classList.remove("on");
            btn[i].parentElement.classList.remove("mo");
          }
        };
        if (flag != true) {
          btn[k].classList.remove("mo");
          text.classList.remove("on");
          bk.classList.remove("mo");
          remover();
        } else {
          remover();
        }
      }
      this.classList.toggle("mo");
      text.classList.toggle("on");
      bk.classList.toggle("mo");
    });
  }
}

window.addEventListener("load", footAcc1, false);

//familySites and Copyright accordion
function footAcc2() {
  const foot = document.querySelectorAll(".foot_inner>section");
  let flag1 = true;
  for (let k = 3; k < foot.length; k++) {
    // .foot_fam / .foot_address
    const btn = foot[k];
    const btn2 = btn.children[1];
    const txt = btn.lastElementChild;
    btn.addEventListener("click", function () {
      for (let i = 3; i < foot.length; i++) {
        if (flag1 != true) {
          btn.classList.remove("on");
          btn2.classList.remove("active");
          txt.classList.remove("active");
          if (this != foot[i]) {
            foot[i].classList.remove("on");
            foot[i].firstElementChild.classList.remove("active");
            foot[i].lastElementChild.classList.remove("active");
          }
        } else {
          if (this != foot[i]) {
            foot[i].classList.remove("on");
            foot[i].firstElementChild.classList.remove("active");
            foot[i].lastElementChild.classList.remove("active");
          }
        }
      }
      console.log(txt);
      btn2.classList.add("mob");
      txt.classList.add("mo");
      btn.classList.toggle("on");
      btn2.classList.toggle("active");
      txt.classList.toggle("active");
    });
  }
}

window.addEventListener("load", footAcc2, false);
