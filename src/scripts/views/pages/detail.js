import UrlParser from '../../routes/url-parser';
import DicodingSource from '../../data/dicodingdb-resource';
import {createRestoTemplate} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      <div id="likeButtonContainer"></div>
      <div id="loading">Loading...</div>
      <div id="error">Failed to load data. Please try again later.</div>
    `;
  },

  async afterRender() {
    const loadingIndicator = document.querySelector('#loading');
    const errorIndicator = document.querySelector('#error');
    const restoContainer = document.querySelector('#resto');

    try {
      // Show loading indicator
      loadingIndicator.style.display = 'block';

      // Simulate a delay for loading
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const resto = await DicodingSource.detailResto(url.id);

      // Hide loading indicator
      loadingIndicator.style.display = 'none';

      restoContainer.innerHTML = createRestoTemplate(resto);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        resto: {
          id: resto.id,
          name: resto.name,
          description: resto.description,
          pictureId: resto.pictureId,
          city: resto.city,
          rating: resto.rating,
        },
      });
    } catch (error) {
      // Hide loading indicator
      loadingIndicator.style.display = 'none';

      // Show error indicator
      errorIndicator.style.display = 'block';
      console.error('Error fetching data:', error);
    }
  },
};

export default Detail;
