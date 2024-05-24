const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3001;

app.use(bodyParser.json());

// Ruta para servir el archivo HTML
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2.html'));
});

let notes = {};

app.post('/notas', (req, res) => {
    const { idEstudiante, notaEstudiante } = req.body;
    notes[idEstudiante] = notaEstudiante;
    res.json({ message: 'Notas agregadas con éxito' });
});

app.get('/notas/:idEstudiante', (req, res) => {
    const idEstudiante = req.params.idEstudiante;
    if (notes[idEstudiante]) {
        res.json({ notas: notes[idEstudiante] });
    } else {
        res.json({ message: 'Notas no encontradas' });
    }
});

app.put('/notas/:idEstudiante', (req, res) => {
    const idEstudiante = req.params.idEstudiante;
    const { notaEstudiante } = req.body;
    if (notes[idEstudiante]) {
        notes[idEstudiante] = notaEstudiante;
        res.json({ message: 'Notas actualizadas con éxito' });
    } else {
        res.json({ message: 'Notas no encontradas' });
    }
});

app.delete('/notas/:idEstudiante', (req, res) => {
    const idEstudiante = req.params.idEstudiante;
    if (notes[idEstudiante]) {
        delete notes[idEstudiante];
        res.json({ message: 'Notas eliminadas con éxito' });
    } else {
        res.json({ message: 'Notas no encontradas' });
    }
});

app.listen(port, () => {
    console.log(`Notes service listening at http://localhost:${port}`);
});
