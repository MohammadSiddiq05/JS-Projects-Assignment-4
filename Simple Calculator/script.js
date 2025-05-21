let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let operatorList = ["+", "-", "*", "/", "%"];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let btnText = btn.textContent;
    let lastChar = display.value.slice(-1);

    if (btnText === "=") {
      if (display.value !== "") {
        display.value = eval(display.value);
      }
    } else if (btnText === "AC") {
      display.value = "";
    } else if (btnText === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (operatorList.includes(btnText)) {
      if (operatorList.includes(lastChar)) {
        display.value = display.value.slice(0, -1) + btnText;
      } else if (display.value !== "") {
        display.value += btnText;
      }
    } else {
      display.value += btnText;
    }
  });
});
