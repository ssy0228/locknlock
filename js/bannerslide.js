// bannerslide
//무한 슬라이드 아니고 1 - 3 수동
// 버튼 누르면 이미지 넘어가고 버튼 색 활성화

// main_visual
const mainSlider = () => {
  const btn = document.querySelectorAll('button[type="button"].roll');
  const slidePage = document.querySelector('.slide_wrap');  
  let flag = true;
  console.log();

  for (let i = 0; i < btn.length; i++) {
    const el = btn[i];
    const SLIDE_ACTIVE = (e) => {
      for (let k = 0; k < btn.length; k++) {
        const el2 = btn[k];
        let deactive = (e) => {
          if (e.currentTarget != el2) {
            el2.classList.remove("on");
          }
        };
  
        if (flag != true) {
          el.classList.remove("on");
          deactive(e);
        } else {
          deactive(e);
        }
      }
      el.classList.add("on");
    }
    const PAGE_SLIDE = () => { 
      if (i === 0) {
        slidePage.style.transform = "translateX(0)";
      } else if (i === btn.length - 2) {
        slidePage.style.transform = "translateX(-100vw)";
      } else if (i === btn.length - 1) { 
        slidePage.style.transform = "translateX(-200vw)";
      }
    }
    

    if (navigator.maxTouchPoints === 0) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        SLIDE_ACTIVE(e);
        PAGE_SLIDE();
      });
    } else {
      el.addEventListener('touchstart', (e) => { 
        SLIDE_ACTIVE(e);
        PAGE_SLIDE();
      }, {
        passive: false,
      });
    }
  }
};

window.addEventListener("load", mainSlider);



// lounge (고정형 / 이미지 사이즈 변할 때 슬라이드는..? )
const changer = () => {
  const view = window.innerWidth;
  const slider = document.querySelector(".slideList");
  const slideimg = document.querySelectorAll(".slide2 img");
  const btnNext = document.querySelector(".next2");
  const btnPrev = document.querySelector(".prev2");
  const progRes = document.querySelector(".bar");
  const curNum = document.querySelector(".slide_num1");

  if ( view <= 1200 ) {
    let sliderWidth = 90;
    let sliderMargin = 4.17;
    let progResWidth = 25.34;
    let curIdx = 0;
    slideCount = slideimg.length;
    slider.style.width = (sliderWidth + sliderMargin) * slideCount + "vw";
    curNum.innerHTML = String(curIdx + 1);
  
    let moveSlide = (num) => {
      slider.style.left = -num * 94.17 + "vw";
      progRes.style.width = progResWidth * (curIdx + 1) + "vw";
      curIdx = num;
    }
  
    btnNext.classList.remove("disable");
    const imgPrevEvent = (e) => { 
      if (curIdx !== 0) {
        moveSlide(curIdx - 1);
        e.currentTarget.classList.remove("disable");
        btnNext.classList.add("disable");
        progRes.style.width = progResWidth * (curIdx + 1) + "vw";
        curNum.innerHTML = String(curIdx + 1);
      }
      if (curIdx < 1) {
        moveSlide(curIdx);
        e.currentTarget.classList.add("disable");
        btnNext.classList.remove("disable");
      }
    }
    const imgNextEvent = (e) => {
      if (curIdx !== slideCount - 1) {
        moveSlide(curIdx + 1);
        e.currentTarget.classList.remove("disable");
        btnPrev.classList.add("disable");
        progRes.style.width = progResWidth * (curIdx + 1) + "vw";
        curNum.innerHTML = String(curIdx + 1);
      }
      if (curIdx == slideCount - 1) {
        this.classList.add("disable");
        btnPrev.classList.remove("disable");
      }
    }

    btnPrev.addEventListener("click", (e)=> {
      e.preventDefault();
      imgPrevEvent(e);
    });
    btnNext.addEventListener("click", (e) => {
      e.preventDefault();
      imgNextEvent(e);
    });
  } else if ( view > 1200){
    let sliderWidth = 1130;
    let sliderMargin = 50;
    let progResWidth = 320;
    let curIdx = 0;
    slideCount = slideimg.length;
    slider.style.width = (sliderWidth + sliderMargin) * slideCount + "px";
    curNum.innerHTML = String(curIdx + 1);
  
    let moveSlide = (num) => {
      slider.style.left = -num * 1180 + "px";
      progRes.style.width = progResWidth * (curIdx + 1) + "px";
      curIdx = num;
    }
  
    btnNext.classList.remove("disable");
      const prevEvent = (e) => {
        if (curIdx !== 0) {
          moveSlide(curIdx - 1);
          e.currentTarget.classList.remove("disable");
          btnNext.classList.add("disable");
          progRes.style.width = progResWidth * (curIdx + 1) + "px";
          curNum.innerHTML = String(curIdx + 1);
        }
        if (curIdx < 1) {
          moveSlide(curIdx);
          e.currentTarget.classList.add("disable");
          btnNext.classList.remove("disable");
        }
      };
      const nextEvent = (e) => {
        if (curIdx !== slideCount - 1) {
          moveSlide(curIdx + 1);
          e.currentTarget.classList.remove("disable");
          btnPrev.classList.add("disable");
          progRes.style.width = progResWidth * (curIdx + 1) + "px";
          curNum.innerHTML = String(curIdx + 1);
        }
        if (curIdx == slideCount - 1) {
          e.currentTarget.classList.add("disable");
          btnPrev.classList.remove("disable");
        }
      };

      btnPrev.addEventListener("click", (e) => {
        e.preventDefault();
        prevEvent(e);
      });
      btnNext.addEventListener("click", (e) => {
        e.preventDefault();
        nextEvent(e);
      });
  }
}

window.addEventListener("load", changer);

