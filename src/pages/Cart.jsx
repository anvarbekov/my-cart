// reduc imports
import { useSelector } from 'react-redux';
// components import
import { CartItem } from '../components';
// react router dom import
import { Link } from 'react-router-dom';

export default function Cart() {
  const { products, allProducts, price } = useSelector(
    (state) => state.products
  );

  return (
    <div className="overflow-x-auto">
      {products.length == 0 ? (
        <div className="flex flex-col items-center p-5 justify-center">
          <h2 className="text-2xl">Your cart is empty.</h2>
          <Link to="/" className="btn btn-success mt-4">
            Go to Home Page
          </Link>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => {
              return (
                <CartItem
                  key={prod.id}
                  title={prod.title}
                  description={prod.description}
                  price={prod.price}
                  id={prod.id}
                  thumbnail={prod.thumbnail}
                  amount={prod.amount}
                  brand={prod.brand}
                />
              );
            })}
          </tbody>
        </table>
      )}
      <div className="flex items-center justify-between bg-base-200 p-5 text-2xl rounded-md">
        <h2>Total Amount: {allProducts}</h2>
        <h2>Total Price: {price.toFixed(3)}</h2>
      </div>
    </div>
  );
}
