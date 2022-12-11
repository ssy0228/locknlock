
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

function name(params) {
  
}