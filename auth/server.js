const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Ruta para servir el archivo HTML
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

let users = [];

app.post('/signUp', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.json({ message: 'Usuario registrado con éxito' });
});

app.post('/logIn', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ message: 'Inicio de sesión exitoso' });
    } else {
        res.json({ message: 'Usuario o contraseña incorrectos' });
    }
});

app.listen(port, () => {
    console.log(`Auth service listening at http://localhost:${port}`);
});
