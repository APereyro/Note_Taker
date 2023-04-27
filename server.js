const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const app = express();
const api = require('./routes/index.js');
const html = require('./routes/html');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/html', html)
app.use(clog);
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


const server = app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
);