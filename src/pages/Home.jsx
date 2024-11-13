// util import
import request from '../util/request';

// components import
import { ProductsContainer } from '../components';

// loader react router dom
export const loader = async () => {
  const req = await request.get('/products');
  return req.data;
};

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">All Products:</h1>
      <ProductsContainer />
    </div>
  );
}
