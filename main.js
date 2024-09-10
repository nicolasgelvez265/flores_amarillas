onload = () =>{
        document.body.classList.remove("container");
};

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;  // Establece el puerto a 3000

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para servir el archivo FLORES.html
app.get('/FLORES.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'FLORES.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
