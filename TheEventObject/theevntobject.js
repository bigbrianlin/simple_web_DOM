document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt);
});

// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     console.log(e.key);
//     console.log(e.code);
// })

// input.addEventListener('keyup', function () {
//     console.log("KEYUP")
// })

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
        case 'ArrowDown':
            console.log("DOWN!");
        case 'ArrowLeft':
            console.log("LEFT!");
        case 'ArrowRight':
            console.log("RIGHT!");
            break;
        default:
            console.log("IGNORED!")
    }
})