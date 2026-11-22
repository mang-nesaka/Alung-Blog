document.addEventListener('DOMContentLoaded', () => {
  // Hyperdrive Matrix Mode
  const matrixBtn = document.getElementById('matrix-btn');
  let isHyper = false;

  matrixBtn.addEventListener('click', () => {
    isHyper = !isHyper;
    document.body.classList.toggle('hyperdrive', isHyper);
    matrixBtn.textContent = isHyper ? 'WARP ENGAGED 🚀' : 'HYPERDRIVE 🌌';
  });

  // AI Slop Wisdom Generator
  const quotes = [
    '"Di setiap baris kode yang error, tersimpan lompatan logika yang membawa Alung semakin dekat ke masa depan!"',
    '"Dari Sei Priok hingga puncak revolusi komputasi, batasan hanyalah algoritma yang belum dipecahkan."',
    '"Coding bukan sekadar sintaks, ini adalah manifes kehendak manusia menundukkan logika mesin."',
    '"Ketika AI menggebrak dunia, Alung Simatupang berdiri tegak di garis depan menyambut peradaban baru!"',
    '"Debugging adalah seni membongkar ketidakmungkinan hingga tersisa mahakarya nyata."',
    '"Teknologi sejati adalah ketika imajinasi liar bertransformasi menjadi solusi nyata bagi jutaan manusia."'
  ];

  const genBtn = document.getElementById('generate-slop-btn');
  const quoteDisplay = document.getElementById('ai-quote-display');

  genBtn.addEventListener('click', () => {
    quoteDisplay.style.opacity = '0';
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteDisplay.textContent = quotes[randomIndex];
      quoteDisplay.style.opacity = '1';
    }, 200);
  });
});
