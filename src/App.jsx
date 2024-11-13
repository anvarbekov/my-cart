// react router dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages import
import { Cart, Home, ProductDetail } from './pages';

// layouts import
import MainLayout from './layouts/MainLayout';

// loader react router dom
import { loader as HomeLoader } from './pages/Home';
import { loader as ProductDetailLoader } from './pages/ProductDetail';

export default function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/product/:id',
          element: <ProductDetail />,
          loader: ProductDetailLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
