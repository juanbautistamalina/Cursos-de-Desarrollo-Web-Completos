try {
    // Intentamos ejecutar este bloque de código
    // let sum = a + 10; // Esto provocará un error porque 'a' no está definida

    throw "Error Ocasionado con throw";

} catch (error) {
    // Si hay un error en el bloque try, se ejecuta este bloque
    console.log("Ocurrió un error: " + error);

} finally {
    // Este bloque siempre se ejecuta, independientemente de si hubo un error o no
    console.log("El bloque finally siempre se ejecuta.");
}
