import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import { Toaster } from 'react-hot-toast';
import { WishListProvider } from './context/WishLishContext/WishList-context';
import { SearchProvider } from './context/Searchcontext/Search-Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <WishListProvider>
        <SearchProvider>
              <App/>
              <Toaster/>
        </SearchProvider>
      </WishListProvider>
    </Provider>
  </BrowserRouter>
); 

