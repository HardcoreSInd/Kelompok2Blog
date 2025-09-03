// Import Express
const express = require('express');
const path = require('path');
const app = express();

// Middleware: serve file statis dari folder frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Contoh endpoint API untuk articles
let articles = [
  { id: 1, title: "Artikel 1", content: "Isi artikel 1" },
  { id: 2, title: "Artikel 2", content: "Isi artikel 2" }
];

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// Contoh endpoint untuk Contact Us (POST)
app.use(express.json());
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Pesan masuk:", name, email, message);
  res.json({ status: "success", message: "Pesan terkirim!" });
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
