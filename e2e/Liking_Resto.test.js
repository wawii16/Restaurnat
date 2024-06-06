/* eslint-disable new-cap */
const assert = require('assert');

Feature('Liking Resto');

Before(({I}) => {
  I.amOnPage('/#/fav');
});

Scenario('showing empty liked Resto', ({I}) => {
  I.see('No restaurants to display.', '.resto_notFound');
});

Scenario('Liking Resto Test', async ({I}) => {
  I.see('No restaurants to display.', '.resto_notFound');

  I.amOnPage('/');

  I.seeElement('.resto_title a');
  const firstResto = locate('.resto_title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.seeElement('[aria-label="like this resto"]');
  I.click('#likeButton');
  I.seeElement('[aria-label="unlike this resto"]');

  const likedRestoTitle = await I.grabTextFrom('.resto_title');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unLiking Resto Test', async ({I}) => {
  I.see('No restaurants to display.', '.resto_notFound');

  I.amOnPage('/');
  I.seeElement('.resto_title a');
  const firstResto = locate('.resto_title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.seeElement('[aria-label="like this resto"]');
  I.click('#likeButton');
  I.seeElement('[aria-label="unlike this resto"]');

  const likedRestoTitle = await I.grabTextFrom('.resto_title');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.amOnPage('/#/fav');
  I.seeElement('.resto_title a');
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.seeElement('[aria-label="unlike this resto"]');
  I.click('#likeButton');
  I.seeElement('[aria-label="like this resto"]');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.amOnPage('/#/fav');
  I.see('No restaurants to display.', '.resto_notFound');
});

