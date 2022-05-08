function initMoving(target, position, topLimit, btmLimit) {
  if (!target) return true;

  const obj = target;
  obj.initTop = position;
  obj.topLimit = topLimit;
  obj.bottomLimit = document.documentElement.scrollHeight - btmLimit;

  obj.style.position = "absolute";
  obj.top = obj.initTop;
  obj.left = obj.initLeft;

  if (typeof window.pageYOffset == "number") {
    obj.getTop = () => window.pageYOffset;
  } else if (typeof document.documentElement.scrollTop == "number") {
    obj.getTop = () => document.documentElement.scrollTop;
  } else {
    obj.getTop = () => 0;
  }

  if (self.innerHeight) {
    obj.getHeight = () => self.innerHeight;
  } else if (document.documentElement.clientHeight) {
    obj.getHeight = () => document.documentElement.scrollHeight;
  } else {
    obj.getHeight = () => 500;
  }
  console.log(document.documentElement.clientHeight);
  obj.move = setInterval(() => {
    if (obj.initTop > 0) {
      pos = obj.getTop() + obj.initTop;
    } else {
      pos = obj.getTop() + obj.getHeight() + obj.initTop;
      //pos = obj.getTop() + obj.getHeight() / 2 - 15;
    }

    if (pos > obj.bottomLimit) pos = obj.bottomLimit;
    if (pos < obj.topLimit) pos = obj.topLimit;

    interval = obj.top - pos;
    obj.top = obj.top - interval / 3;
    obj.style.top = obj.top + "px";
  }, 30);
}

function ScrollTop() {
  self.window.scroll(0, 0);
}


window.addEventListener("load", ()=>{
  initMoving(document.getElementById('quick'), -130, 110, 15)
});