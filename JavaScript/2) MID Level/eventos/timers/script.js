setTimeout(() => {
    document.write("<h1>Bienvenido</h1>")
}, 2000);


setInterval(() =>{
    clearTimeout();
}, 5000);

clearInterval()
// ------------

const intervalo = setInterval(() =>{
    document.write("a")
}, 2000);

setTimeout(() =>{
    clearInterval(intervalo)
}, 9000)



