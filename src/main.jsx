import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Redux-toolkit import
import { store } from './store.js';
import { Provider } from 'react-redux';

// react toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer position="bottom-right" />
  </Provider>
);
