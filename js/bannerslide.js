// bannerslide
//무한 슬라이드 아니고 1 - 3 수동
// 버튼 누르면 이미지 넘어가고 버튼 색 활성화

// main_visual
function mainer() {
  const slide = document.getElementById("slide_rollin");
  const btn = slide.getElementsByTagName("button");
  let arr = Array.prototype.slice.call(btn);
  const btn1 = document.getElementById("roll1");
  const btn2 = document.getElementById("roll2");
  const btn3 = document.getElementById("roll3");
  console.log(arr);
  btn[0].addEventListener("click", function () {
    document.getElementById("slide_wrap").style.transform = "translateX(0)";
    btn1.classList.add("on");
    btn2.classList.remove("on");
    btn3.classList.remove("on");
  });
  btn[1].addEventListener("click", function () {
    document.getElementById("slide_wrap").style.transform = "translatex(-100vw)";
    document.getElementById("slide_wrap").style.transition = "transform 0.4s linear 0s";
    btn1.classList.remove("on");
    btn2.classList.add("on");
    btn3.classList.remove("on");
  }); 
  btn[2].addEventListener("click", function () {
    document.getElementById("slide_wrap").style.transform = "translateX(-200vw)";
    btn1.classList.remove("on");
    btn2.classList.remove("on");
    btn3.classList.add("on");
  });

};

window.addEventListener("load", mainer);



// lounge (고정형 / 이미지 사이즈 변할 때 슬라이드는..? )
function changer() {
  const view = window.innerWidth;
  const slider = document.querySelector(".slideList");
  const slideimg = document.querySelectorAll(".slide2 img");
  const btnNext = document.querySelector(".next2");
  const btnPrev = document.querySelector(".prev2");
  const progRes = document.querySelector(".bar");
  const curNum = document.querySelector(".slide_num1");

  if ( view <= 1200 ) {
    const sliderWidth = 90;
    const sliderMargin = 4.17;
    const progResWidth = 25.34;
    let curIdx = 0;
    slideCount = slideimg.length;
    slider.style.width = (sliderWidth + sliderMargin) * slideCount + "vw";
    curNum.innerHTML = String(curIdx + 1);
  
    function moveSlide(num) {
      slider.style.left = -num * 94.17 + "vw";
      progRes.style.width = progResWidth * (curIdx + 1) + "vw";
      curIdx = num;
    }
  
    btnNext.classList.remove("disable");
    btnPrev.addEventListener("click", function () {
      if (curIdx !== 0) {
        moveSlide(curIdx - 1);
        this.classList.remove("disable");
        btnNext.classList.add("disable");
        progRes.style.width = progResWidth * (curIdx + 1) + "vw";
        curNum.innerHTML = String(curIdx + 1);
      }
      if (curIdx < 1) {
        moveSlide(curIdx);
        this.classList.add("disable");
        btnNext.classList.remove("disable");
      }
    });
    btnNext.addEventListener("click", function () {
      if (curIdx !== slideCount - 1) {
        moveSlide(curIdx + 1);
        this.classList.remove("disable");
        btnPrev.classList.add("disable");
        progRes.style.width = progResWidth * (curIdx + 1) + "vw";
        curNum.innerHTML = String(curIdx + 1);
      }
      if (curIdx == slideCount - 1) {
        this.classList.add("disable");
        btnPrev.classList.remove("disable");
      }
    });
  } else if ( view > 1200){
    const sliderWidth = 1130;
    const sliderMargin = 50;
    const progResWidth = 320;
    let curIdx = 0;
    slideCount = slideimg.length;
    slider.style.width = (sliderWidth + sliderMargin) * slideCount + "px";
    curNum.innerHTML = String(curIdx + 1);
  
    function moveSlide(num) {
      slider.style.left = -num * 1180 + "px";
      progRes.style.width = progResWidth * (curIdx + 1) + "px";
      curIdx = num;
    }
  
    btnNext.classList.remove("disable");
    btnPrev.addEventListener("click", function () {
      if (curIdx !== 0) {
        moveSlide(curIdx - 1);
        this.classList.remove("disable");
        btnNext.classList.add("disable");
        progRes.style.width = progResWidth * (curIdx + 1) + "px";
        curNum.innerHTML = String(curIdx + 1);
      }
      if (curIdx < 1) {
        moveSlide(curIdx);
        this.classList.add("disable");
        btnNext.classList.remove("disable");
      }
    });
    btnNext.addEventListener("click", function () {
      if (curIdx !== slideCount - 1) {
        moveSlide(curIdx + 1);
        this.classList.remove("disable");
        btnPrev.classList.add("disable");
        progRes.style.width = progResWidth * (curIdx + 1) + "px";
        curNum.innerHTML = String(curIdx + 1);
      }
      if (curIdx == slideCount - 1) {
        this.classList.add("disable");
        btnPrev.classList.remove("disable");
      }
    });
  }





}

window.addEventListener("load", changer);
