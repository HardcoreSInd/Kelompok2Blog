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
