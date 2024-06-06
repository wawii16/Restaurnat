import DicodingSource from '../../data/dicodingdb-resource';
import {createDaftarRestoTemplate} from '../templates/template-creator';

const DaftarResto = {
  async render() {
    return `
        <h2 class="title">Daftar Resto</h2>
        <div id="restoList" class="daftar-restaurant"></div>  
        <div id="loading">Loading...</div>
        <div id="error">Failed to load data. Please try again later.</div>

    `;
  },

  async afterRender() {
    const loadingIndicator = document.querySelector('#loading');
    const errorIndicator = document.querySelector('#error');
    const restoContainer = document.getElementById('restoList');

    try {
      loadingIndicator.style.display = 'block';

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const daftarResto = await DicodingSource.daftarResto();

      loadingIndicator.style.display = 'none';

      if (daftarResto.length > 0) {
        daftarResto.forEach((resto) => {
          restoContainer.innerHTML += createDaftarRestoTemplate(resto);
        });
      } else {
        restoContainer.innerHTML = '<p>No restaurants to display.</p>';
      }
    } catch (error) {
      loadingIndicator.style.display = 'none';

      errorIndicator.style.display = 'block';
      console.error('Error fetching data:', error);
    }
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburger');

  hamburgerMenu.addEventListener('click', (event) => {
    event.preventDefault();

    const loadingIndicator = document.querySelector('#loading');
    loadingIndicator.style.display = 'none';
  });

  const skipLinks = document.querySelectorAll('.skip-link');

  skipLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.setAttribute('tabindex', -1);
        targetElement.focus();
        targetElement.scrollIntoView({behavior: 'smooth'});
      }
    });
  });
});


export default DaftarResto;
