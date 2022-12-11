

function goTop(e) {
  const goTopbtn = document.querySelector('.foot_inner>button[type="button"]');

  goTopbtn.addEventListener('click', function () {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    })
  })

}

window.addEventListener('load', goTop);