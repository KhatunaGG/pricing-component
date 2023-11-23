let switchBtn = document.querySelector(".checkbox__lable");
let priceH1 = Array.from(document.querySelectorAll(".flex__price"));
let input = document.querySelector(".checkbox__input");

switchBtn.addEventListener("change", () => {
  if (input.checked) {
    switchBtn.style.background = "#6D72DE";
    priceH1.forEach((priceH1) => {
      priceH1.textContent = (+priceH1.textContent * 10).toFixed(2);
    });
  } else {
    switchBtn.style.background = "#A2A7F0";
    priceH1.forEach((priceH1) => {
      priceH1.textContent = (+priceH1.textContent / 10).toFixed(2);
    });
  }
});
