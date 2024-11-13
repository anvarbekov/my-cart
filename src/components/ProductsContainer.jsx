// react router dom import
import { useLoaderData } from 'react-router-dom';
// components import
import SingleProduct from './SingleProduct';

export default function ProductsContainer() {
  const { products } = useLoaderData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => {
        const { id, title, brand, price, thumbnail } = product;

        return (
          <SingleProduct
            key={id}
            id={id}
            title={title}
            brand={brand}
            price={price}
            thumbnail={thumbnail}
            product={product}
          />
        );
      })}
    </div>
  );
}
