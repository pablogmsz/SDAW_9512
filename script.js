// script.js
// Muestra un saludo en un alert cuando se pulsa el botón.
const nombre = "Pablo Gómez Sánchez";
document.getElementById('saludoBtn').addEventListener('click', () => {
  alert(`Hola ${nombre}`);
});
