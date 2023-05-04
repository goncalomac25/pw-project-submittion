const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");

const section1Info = section1.querySelector(".info");
const section2Info = section2.querySelector(".info");
const section3Info = section3.querySelector(".info");

const section1Btn = section1.querySelector(".more-info-btn");
const section2Btn = section2.querySelector(".more-info-btn");
const section3Btn = section3.querySelector(".more-info-btn");

section1Btn.addEventListener("click", () => {
  section1Info.style.display = "flex";
});

section2Btn.addEventListener("click", () => {
  section2Info.style.display = "flex";
});

section3Btn.addEventListener("click", () => {
  section3Info.style.display = "flex";
});
