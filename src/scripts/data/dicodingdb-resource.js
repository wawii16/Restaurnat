/* eslint-disable require-jsdoc */
import API_ENDPOINT from '../globals/api-endpoint';


class DicodingSource {
  static async daftarResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    // eslint-disable-next-line new-cap
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}
export default DicodingSource;
