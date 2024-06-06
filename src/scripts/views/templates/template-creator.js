/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createDaftarRestoTemplate = (resto) => `
<div class="restaurant">
  <h3 class="resto_title"><a tabindex="0" href="/#/detail/${resto.id}">${resto.name}</a></h3>
  <picture>
  <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_SMALL.replace('<pictureId>', resto.pictureId)}">
  <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL.replace('<pictureId>', resto.pictureId)}" alt="${resto.name}"/></picture>

  <p class="description">${resto.description}</p>
  <p>${resto.city}</p>
  <p>Rating: ${resto.rating}</p>
</div>
`;


const createRestoTemplate = (resto) => `
<h2 class="resto_title">${resto.name}</h2>
<picture>
<source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_SMALL.replace('<pictureId>', resto.pictureId)}">
<img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SMALL.replace('<pictureId>', resto.pictureId)}" alt="${resto.name}"/></picture>
  <div class="resto_info">
    <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${resto.address}</p>
    <h4>Kota</h4>
    <p>${resto.city}</p>
    <h4>Rating</h4>
    <p>⭐️${resto.rating}</p>
  

  </div>
  <div class="resto_description">
    <h3>Deskripsi</h3>
    <p>${resto.description}</p>
    <h3>Daftar Menu </h3>
    <div class="daftar-menu">
        <div class="menu">
            <h3>Makanan</h3>
            <ul>
            ${resto.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
            </ul> 
        </div> 
        <div class="menu">
            <h3>Minuman</h3>
            <ul>
            ${resto.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
            </ul>
        </div> 
    </div> 
    <div class="customer_reviews">
    <h3>Customer Review</h3>
    ${resto.customerReviews.map((review) => `
      <h4>${review.name} - ${review.date}</h4>
      <p>${review.review}</p>
    `).join('')}
  </div>
  </div>


`;


const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createDaftarRestoTemplate,
  createRestoTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
