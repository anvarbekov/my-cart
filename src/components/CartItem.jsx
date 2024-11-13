// redux-toolkit import
import { useDispatch } from 'react-redux';
// react import
import { useRef } from 'react';

// productSlice import
import {
  incrementAmount,
  decrementAmount,
  removeProduct,
} from '../features/productsSlice';

export default function CartItem({
  title,
  description,
  amount,
  thumbnail,
  id,
  brand,
  price,
}) {
  const dispatch = useDispatch();

  const rowRef = useRef(null);

  const deleteCartItem = () => {
    if (rowRef.current) {
      rowRef.current.classList.add('-translate-x-full');
      setTimeout(() => {
        dispatch(removeProduct(id));
        rowRef.current.classList.remove('-translate-x-full');
      }, 1000);
    }
  };

  return (
    <tr ref={rowRef} className="transition-all duration-700">
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={thumbnail} alt={title} />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">Brand: {brand}</div>
          </div>
        </div>
      </td>
      <td>
        {description < description.substring(0, 50)
          ? description
          : `${description.substring(0, 70)}...`}
      </td>
      <td>{price}</td>
      <td>
        <div className="flex items-center gap-3 ">
          <button
            onClick={() => {
              if (amount == 1) {
                dispatch(removeProduct(id));
              } else {
                dispatch(decrementAmount(id));
              }
            }}
            className="btn  btn-sm w-10"
          >
            {' '}
            &#8722;{' '}
          </button>
          <span className="text-xl font-bold">{amount}</span>
          <button
            onClick={() => dispatch(incrementAmount(id))}
            className="btn  btn-sm w-10"
          >
            {' '}
            &#43;{' '}
          </button>
        </div>
      </td>
      <td>
        <button onClick={deleteCartItem} className="btn btn-error btn-sm">
          Delete
        </button>
      </td>
    </tr>
  );
}
