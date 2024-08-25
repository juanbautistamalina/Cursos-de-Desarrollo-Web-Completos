/* Cofla llega a su casa y abre una página y apreta F11. Desde ahí se pone a navegar pero hay un problema... como ahora está en
   pantalla completa no puede ver ni la barra de marcadores, ni el protocolo, ni la URL, ni ninguna información que nos puede otorgar
   la interfaz que contiene la barra de búsqueda.  */


const href = window.location.href;
const hostname = window.location.hostname;
const pathname = window.location.pathname;
const protocol = window.location.protocol;

const html = `URL: <b>${href}</b><br>
              Protocolo: <b>${protocol}</b><br>
              Hostname: <b>${hostname}</b><br>
              Pathname: <b>${pathname}</b><br>`


document.body.innerHTML = html