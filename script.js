const abutton = document.querySelector(".netabtn");
const abutton1 = document.querySelector(".netabtn1");
const abutton2 = document.querySelector(".netabtn2");
const abutton3 = document.querySelector(".netabtn3");
const abutton4 = document.querySelector(".netabtn4");
const abutton5 = document.querySelector(".netabtn5");
const abutton6 = document.querySelector(".netabtn6");

const para = document.querySelector(".para");
const para1 = document.querySelector(".para1");
const para2 = document.querySelector(".para2");
const para3 = document.querySelector(".para3");
const para4 = document.querySelector(".para4");
const para5 = document.querySelector(".para5");
const para6 = document.querySelector(".para6");

const svgrot = document.querySelector(".svgrot");
const svgrot1 = document.querySelector(".svgrot1");
const svgrot2 = document.querySelector(".svgrot2");
const svgrot3 = document.querySelector(".svgrot3");
const svgrot4 = document.querySelector(".svgrot4");
const svgrot5 = document.querySelector(".svgrot5");
const svgrot6 = document.querySelector(".svgrot6");

// fuction togle
function togadd(varin) {
  const cl = varin.classList.toggle("active");
  return cl;
}
// fuction remove
function togrmov(varin) {
  return varin.classList.remove("active");
}

abutton.addEventListener("click", function () {
  // main
  togadd(para);
  togadd(svgrot);

  // all remove class
  // para1
  togrmov(para1);
  togrmov(svgrot1);
  // para2
  togrmov(para2);
  togrmov(svgrot2);
  // para3
  togrmov(para3);
  togrmov(svgrot3);
  // para4
  togrmov(para4);
  togrmov(svgrot4);
  // para5
  togrmov(para5);
  togrmov(svgrot5);
  // para6
  togrmov(para6);
  togrmov(svgrot6);
});

// btn 2
abutton1.addEventListener("click", function () {
  // main
  togadd(para1);
  togadd(svgrot1);

  // all remove class
  //para
  togrmov(para);
  togrmov(svgrot);
  // para2
  togrmov(para2);
  togrmov(svgrot2);
  // para3
  togrmov(para3);
  togrmov(svgrot3);
  // para4
  togrmov(para4);
  togrmov(svgrot4);
  // para5
  togrmov(para5);
  togrmov(svgrot5);
  // para6
  togrmov(para6);
  togrmov(svgrot6);
});
abutton2.addEventListener("click", function () {
  // main
  togadd(para2);
  togadd(svgrot2);

  // all remove class
  //para
  togrmov(para);
  togrmov(svgrot);
  //  para1
  togrmov(para1);
  togrmov(svgrot1);
  // para3
  togrmov(para3);
  togrmov(svgrot3);
  // para4
  togrmov(para4);
  togrmov(svgrot4);
  // para5
  togrmov(para5);
  togrmov(svgrot5);
  // para6
  togrmov(para6);
  togrmov(svgrot6);
});
abutton3.addEventListener("click", function () {
  // main
  togadd(para3);
  togadd(svgrot3);

  // all remove class
  //para
  togrmov(para);
  togrmov(svgrot);
  //  para1
  togrmov(para1);
  togrmov(svgrot1);
  // para2
  togrmov(para2);
  togrmov(svgrot2);

  // para4
  togrmov(para4);
  togrmov(svgrot4);
  // para5
  togrmov(para5);
  togrmov(svgrot5);
  // para6
  togrmov(para6);
  togrmov(svgrot6);
});
abutton4.addEventListener("click", function () {
  // main
  togadd(para4);
  togadd(svgrot4);

  // all remove class
  //para
  togrmov(para);
  togrmov(svgrot);
  //  para1
  togrmov(para1);
  togrmov(svgrot1);
  // para2
  togrmov(para2);
  togrmov(svgrot2);
  // para3
  togrmov(para3);
  togrmov(svgrot3);
  // para5
  togrmov(para5);
  togrmov(svgrot5);
  // para6
  togrmov(para6);
  togrmov(svgrot6);
});
abutton5.addEventListener("click", function () {
  // main
  togadd(para5);
  togadd(svgrot5);

  // all remove class
  //para
  togrmov(para);
  togrmov(svgrot);
  //  para1
  togrmov(para1);
  togrmov(svgrot1);
  // para2
  togrmov(para2);
  togrmov(svgrot2);
  // para3
  togrmov(para3);
  togrmov(svgrot3);
  // para4
  togrmov(para4);
  togrmov(svgrot4);
  // para6
  togrmov(para6);
  togrmov(svgrot6);
});

abutton6.addEventListener("click", function () {
  // main
  togadd(para6);
  togadd(svgrot6);

  // all remove class
  //para
  togrmov(para);
  togrmov(svgrot);
  //  para1
  togrmov(para1);
  togrmov(svgrot1);
  // para2
  togrmov(para2);
  togrmov(svgrot2);
  // para3
  togrmov(para3);
  togrmov(svgrot3);
  // para4
  togrmov(para4);
  togrmov(svgrot4);
  // para5
  togrmov(para5);
  togrmov(svgrot5);
});
