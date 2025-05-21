let move = document.querySelector(".parent");
let clientX = document.querySelector(".X");
let clientY = document.querySelector(".Y");

let originalLeft = "70px";
let originalTop = "150px";

move.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  move.style.left = x + "px";
  move.style.top = y + "px";
  move.style.transform = "translate(-50%, -50%)";

  clientX.innerText = `ClientX: ${x}`;
  clientY.innerText = `ClientY: ${y}`;
});

move.addEventListener("mouseleave", () => {
  move.style.left = originalLeft;
  move.style.top = originalTop;

    clientX.innerText = `ClientX:`;
    clientY.innerText = `ClientY:`;

});
