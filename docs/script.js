const articles = [
      { title: "Tips Kreatif Menulis Cerita", content: "Belajar menulis cerita dengan cara kreatif..." },
      { title: "Cara Membuat Ilustrasi Digital", content: "Langkah-langkah membuat ilustrasi digital dengan mudah..." },
      { title: "Tutorial Fotografi Pemula", content: "Teknik dasar fotografi untuk pemula..." },
      { title: "Tips Blogging Efektif", content: "Cara membuat blog lebih menarik dan banyak pengunjung..." },
    ];

    const articlesList = document.getElementById('articlesList');

    // Fungsi untuk menampilkan artikel
    function displayArticles(list) {
      articlesList.innerHTML = '';
      if(list.length === 0){
        articlesList.innerHTML = '<p>Tidak ada artikel ditemukan.</p>';
        return;
      }
      list.forEach(article => {
        const div = document.createElement('div');
        div.className = 'article';
        div.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
        articlesList.appendChild(div);
      });
    }

    // Tampilkan semua artikel saat awal load
    displayArticles(articles);

    // Fungsi pencarian
    function searchArticles() {
      const keyword = document.getElementById('searchInput').value.toLowerCase();
      const filtered = articles.filter(article => 
        article.title.toLowerCase().includes(keyword) ||
        article.content.toLowerCase().includes(keyword)
      );
      displayArticles(filtered);
    }

    // Search otomatis saat mengetik
    document.getElementById('searchInput').addEventListener('input', searchArticles);
  </script>
// Fetch artikel dari backend (di artikel.html)
if (document.getElementById("article-list")) {
  fetch('/api/articles')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("article-list");
      list.innerHTML = data.map(a => `<p><b>${a.title}</b>: ${a.content}</p>`).join('');
    });
}

// Handle form contact (di contact.html)
if (document.getElementById("contactForm")) {
  document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await res.json();
    alert(result.message);
  });
}
