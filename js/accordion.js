// accordion form agree
'use strict';
function agreeLoad() {
  let theBtn = document.getElementsByClassName("btn_agr");
  // div애니메이션 추가 //index 번호 먹이기
    theBtn[0].onclick = function () {
      let hidUp = this.parentElement;
      let answer = this.nextElementSibling;
      if (hidUp.style.maxHeight && answer.style.maxHeight) {
        this.classList.add("active");
        hidUp.style.maxHeight = "";
        answer.style.maxHeight = "";
        hidUp.style.display = "";
        answer.style.display = "";
      } else {
        this.classList.remove("active");
        hidUp.style.maxHeight = 60 + "px";
        answer.style.maxHeight = 0;
      }
  }
}





// accordion q&a // 하나 열면 하나 닫히게. default display: none;
function accordLoad() {
  // p영역을 div로 감싸고 애니메이션 추가 ul, li에 
  let qna = document.getElementsByClassName("qnaBtn");
  console.log(qna);
  for (let i = 0; i < qna.length; i++) {
    qna[i].onclick = function () {
      for (let k = 0; k < qna.length; k++){
        qna[k].classList.remove("active");
        if (this !== qna[k]) {     //this가 현재 선택한 index가 아님
          qna[k].nextElementSibling.style.maxHeight = "";  
        }  
      }
      this.classList.toggle("active");
      let ans = this.nextElementSibling;
      if (ans.style.maxHeight) { 
        this.classList.remove("active");
        ans.style.maxHeight = "";
      } else {
        ans.style.maxHeight = ans.scrollHeight + "px"; 
      } 
    }    
  } 
}

window.addEventListener("load", agreeLoad, false);
window.addEventListener("load", accordLoad, false);