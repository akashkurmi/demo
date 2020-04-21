import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route} from 'react-router-dom';
import Modal from './UI_element/Modal/Modal';
import Admin from './Admin/admin';
import NewProduct from './Admin/NewProdcut/NewProduct'
ReactDOM.render(
  <BrowserRouter>
   <App />
   {/* <Route path="/" exact component={App}></Route>

   <Route path="/FMadmin/login" component={Admin}></Route>
   <Route path="/FMadmin/NewProduct" component={NewProduct}></Route>
    */}
  </BrowserRouter>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
