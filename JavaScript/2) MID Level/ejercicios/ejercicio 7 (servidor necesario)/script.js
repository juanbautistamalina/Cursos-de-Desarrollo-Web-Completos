/* Cofla ya está cursando su último semestre en la universidad. Efectivamente tuvo todo lo necesario
   para pasar de año, pero tiene una duda, quiere saber cuántas personas que cursan el último semestre
   se reciben y cuántas no. Esta información la tiene una API de su universidad a la que el tiene muy fácil 
   acceso. */


async function getInfo(){
   resultado = await axios("informacion.txt")
   console.log(resultado)
}

getInfo()