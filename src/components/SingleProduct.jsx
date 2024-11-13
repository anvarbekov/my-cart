// react router dom import
import { Link } from 'react-router-dom';
// redux-toolkit
import { useDispatch } from 'react-redux';
// productSlice import addProduct
import { addProduct } from '../features/productsSlice';

export default function SingleProduct({
  id,
  title,
  brand,
  price,
  thumbnail,
  product,
}) {
  const dispatch = useDispatch();
  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...product, amount: 1 }));
  };
  return (
    <Link
      to={`/product/${id}`}
      className="card group bg-base-200 w-full h-auto shadow-xl hover:shadow-lg"
    >
      <figure>
        <img
          className="group-hover:scale-110 w-full transition-all duration-300 bg-black"
          src={thumbnail}
          alt={title}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddItem} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
}
