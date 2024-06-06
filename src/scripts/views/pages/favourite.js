import FavoriteRestoIdb from '../../data/fav-resto-idb';
import {createDaftarRestoTemplate} from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <h2 class="title">Restaurant Favorit</h2>
      <div id="restoFav" class="daftar-restaurant"></div>  
      <div id="loading">Loading...</div>
      <div id="error">Failed to load data. Please try again later.</div>
    `;
  },

  async afterRender() {
    const loadingIndicator = document.querySelector('#loading');
    const errorIndicator = document.querySelector('#error');
    const restoContainer = document.querySelector('#restoFav');

    try {
      loadingIndicator.style.display = 'block';

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const restos = await FavoriteRestoIdb.getAllResto();

      loadingIndicator.style.display = 'none';

      if (restos.length > 0) {
        restos.forEach((resto) => {
          restoContainer.innerHTML += createDaftarRestoTemplate(resto);
        });
      } else {
        restoContainer.innerHTML = '<p>No restaurants to display.</p>';
        restoContainer.classList.add('resto_notFound');
      }
    } catch (error) {
      loadingIndicator.style.display = 'none';

      errorIndicator.style.display = 'block';
      console.error('Error fetching data:', error);
    }
  },
};


export default Like;
