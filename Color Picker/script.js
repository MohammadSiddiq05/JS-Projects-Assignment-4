let boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        let boxColor = box.style.backgroundColor;
        let currentColor = document.body.style.backgroundColor;

        if (currentColor === boxColor) {
            document.body.style.backgroundColor = 'white';
        } else {
            document.body.style.backgroundColor = boxColor;
        }
    });
});
