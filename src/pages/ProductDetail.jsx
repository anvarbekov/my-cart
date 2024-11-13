// pages/ProductDetail.js
import { useLoaderData } from 'react-router-dom';
import request from '../util/request';
import { CiDeliveryTruck } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/productsSlice';
import { useState } from 'react';

// Loader: ID asosida mahsulotni olish
export const loader = async ({ params }) => {
  const req = await request.get(`/products/${params.id}`);
  return req.data;
};

export default function ProductDetail() {
  const product = useLoaderData();

  const [imageUrl, setImageUrl] = useState(product.images[0]);

  const dispatch = useDispatch();
  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...product, amount: 1 }));
  };

  return (
    <div className="lg:p-12 p-2 mx-auto gap-4 flex lg:flex-nowrap flex-wrap">
      <div className="lg:w-5/12 w-full flex gap-x-2">
        <div className="flex gap-y-2 flex-col justify-between group">
          {product.images.length <= 1 ? (
            <div className="hidden"></div>
          ) : (
            <div className="flex flex-col justify-between w-20 h-96 gap-y-2 object-cover overflow-auto">
              {product.images.map((img) => {
                return (
                  <img
                    key={Math.random(100)}
                    src={img}
                    alt=""
                    onMouseOver={() => setImageUrl(img)}
                    className="rounded-md cursor-pointer border object-contain w-full h-96"
                  />
                );
              })}
            </div>
          )}
        </div>
        <div className="flex flex-col items-stretch justify-between h-full">
          <img
            className="w-auto h-96 object-contain rounded-md border"
            src={imageUrl}
            title={product.title}
            alt={product.title}
          />
        </div>
      </div>
      <div className="product__info w-full lg:w-5/12">
        <h3>{product.title}</h3>
        <p>Reyting: {product.rating.rate}</p>
        <div className="flex items-center justify-between">
          <p>${product.price}</p>
          <p>{product.category}</p>
        </div>
        <hr />
        <p>{product.description}</p>
      </div>
      <div className="md:w-full lg:w-3/12">
        <div className="p-2 rounded-md border">
          <h3 className="font-bold text-2xl">Product price</h3>
          <div className="status my-2 flex justify-between items-center">
            <p>Status:</p>
            {product.stock < 1 ? (
              <p className="text-red-500">Out of stock {product.stock}</p>
            ) : (
              <p className="text-green-500">in stock {product.stock}</p>
            )}
          </div>
          <div className="flex items-center text-2xl mb-2 gap-x-1">
            <CiDeliveryTruck />
            <p className="text-lg">Free shipping</p>
          </div>
          <p>
            Delivery within 24 hours across Tashkent, and up to 2 business days
            throughout the Republic of Uzbekistan. Status:
          </p>
          <button
            onClick={handleAddItem}
            className="btn btn-primary mb-1 px-4 py-2 w-full mt-2 text-white rounded"
          >
            Buy Now
          </button>
        </div>
        <div className="p-2 rounded-md border mt-8">
          <h3 className="text-md text-center font-bold mb-2">
            Installment payment:{' '}
          </h3>
          <hr />
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ea
            fuga veniam beatae natus velit eius. In inventore id deserunt.
          </p>
          <hr />
          <p className="font-semibold">
            Payments are made at the time of order placement.
          </p>
        </div>
      </div>
    </div>
  );
}
