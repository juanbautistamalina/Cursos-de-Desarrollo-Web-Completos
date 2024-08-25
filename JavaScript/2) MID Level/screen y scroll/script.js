const screen = window.screen;
document.write(screen);

const screenLeft = window.screenLeft;
const screenTop = window.screenTop;
document.write(`<br>Left: <b>${screenLeft}</b> <br>
                Top: <b>${screenTop}</b>`);


const scrollX = window.scrollX;
const scrollY = window.scrollY;
alert(`X: ${scrollX}   Y: ${scrollY}`)