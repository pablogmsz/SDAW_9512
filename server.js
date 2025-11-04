// server.js
// Servidor Express mínimo para servir los archivos estáticos y una ruta API simple.
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir la carpeta pública (este repo usa la raíz como pública)
app.use(express.static(path.join(__dirname)));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Servidor levantado correctamente' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
