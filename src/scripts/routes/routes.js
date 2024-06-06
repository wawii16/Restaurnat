import DaftarResto from '../views/pages/daftar-resto';
import Detail from '../views/pages/detail';
import Like from '../views/pages/favourite';


const routes = {
  '/': DaftarResto, // default page
  '/detail/:id': Detail,
  '/fav': Like,
};

export default routes;
