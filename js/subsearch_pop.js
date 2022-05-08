// search_popup
'use strict';
function srchLoad() {
  let bod = document.getElementsByTagName("body");
  let srchBtn = document.getElementById("btn_srch_open");
  let srchBox = document.getElementById("searchbox_wrap");
  let closeBtn = document.getElementById("btn_srch_close");
  let backOff = document.getElementById("backdrop2");
  console.log(bod);
  // let flag = true;
  srchBtn.addEventListener("click", function () {
    srchBox.style.display = "block";
    backOff.style.display = "block";
    bod[0].style.overflow = "hidden";
  });
  closeBtn.onclick = backOff.onclick = function () {
    srchBox.style.display = "none";
    backOff.style.display = "none";
    bod[0].style.overflow = "";
  };
}

window.addEventListener("load", srchLoad, false);