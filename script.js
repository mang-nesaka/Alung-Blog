document.addEventListener('DOMContentLoaded', () => {
  // Search toggle functionality
  const searchBtn = document.getElementById('search-btn');
  const searchModal = document.getElementById('search-modal');
  const closeSearch = document.getElementById('close-search');
  const searchInput = document.getElementById('search-input');

  if (searchBtn && searchModal && closeSearch) {
    searchBtn.addEventListener('click', () => {
      searchModal.classList.toggle('active');
      if (searchModal.classList.contains('active')) {
        searchInput.focus();
      }
    });

    closeSearch.addEventListener('click', () => {
      searchModal.classList.remove('active');
    });

    // Realtime in-page search highlight
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      const storyBlocks = document.querySelectorAll('.story-block p, .story-block h3');
      
      storyBlocks.forEach(el => {
        if (!term) {
          el.style.backgroundColor = 'transparent';
          return;
        }
        if (el.textContent.toLowerCase().includes(term)) {
          el.style.backgroundColor = '#fef08a';
        } else {
          el.style.backgroundColor = 'transparent';
        }
      });
    });
  }

  // Smooth scroll for nav items
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#' && document.querySelector(targetId)) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
