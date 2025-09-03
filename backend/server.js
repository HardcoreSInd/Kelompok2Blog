const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

let articles = [
  { id: 1, title: "Artikel 1", content: "Isi artikel pertama" },
  { id: 2, title: "Artikel 2", content: "Isi artikel kedua" }
];

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.post('/api/contact', (req, res) => {
  console.log("Pesan masuk:", req.body);
  res.json({ status: "success", message: "Pesan berhasil dikirim!" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));
