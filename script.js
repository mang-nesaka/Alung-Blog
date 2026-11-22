document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle with LocalStorage
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Reading Progress Bar
  const progressBar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
  });

  // Dynamic Reading Time Calculation
  const articleBody = document.querySelector('.article-body');
  if (articleBody) {
    const text = articleBody.innerText;
    const words = text.trim().split(/\s+/).length;
    const readMinutes = Math.ceil(words / 200);
    const readTimeEl = document.getElementById('read-time');
    if (readTimeEl) {
      readTimeEl.textContent = `${readMinutes} min read`;
    }
  }

  // Interactive Reactions with LocalStorage
  const reactionButtons = document.querySelectorAll('.reaction-btn');
  reactionButtons.forEach((btn) => {
    const type = btn.getAttribute('data-type');
    const countEl = btn.querySelector('.reaction-count');
    const storageKey = `reaction_${type}`;

    const isReacted = localStorage.getItem(storageKey);
    if (isReacted) {
      btn.classList.add('active');
    }

    btn.addEventListener('click', () => {
      let currentCount = parseInt(countEl.textContent, 10);
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        countEl.textContent = currentCount - 1;
        localStorage.removeItem(storageKey);
      } else {
        btn.classList.add('active');
        countEl.textContent = currentCount + 1;
        localStorage.setItem(storageKey, 'true');
        showToast(`Terima kasih atas reaksinya! ✨`);
      }
    });
  });

  // Share Article Functionality
  const shareBtn = document.getElementById('share-btn');
  shareBtn.addEventListener('click', async () => {
    const shareData = {
      title: 'Cerita Perjalanan Hidup & Ketertarikan IT - Alunggu Simatupang',
      text: 'Baca kisah inspiratif perjalanan Alunggu Simatupang menembus dunia Teknologi Informasi!',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link artikel berhasil disalin! 📋');
    }
  });

  // Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Toast Helper
  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
});
