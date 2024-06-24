let parrafo = document.querySelector(".parrafo");

let resultado = parrafo.textContent;
alert(`textContent: ${resultado}`);

resultado = parrafo.innerHTML;
alert(`innerHTML: ${resultado}`);

resultado = parrafo.outerHTML;
alert(`outerHTML: ${resultado}`);