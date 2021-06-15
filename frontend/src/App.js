

import React from 'react';
import data from './data';
import Product from './components/product'
import { BrowserRouter, Link, Route, Router } from 'react-router-dom';
  function App() {
  return (
<BrowserRouter>

    <div className="grid_container">
    <header className="row">
<div>
 <a className="BRAND" href="/">AMAZONA</a>
</div>
<div>
 <a href="/cart">cart</a>

 <a href="/sign in">sign in</a>
</div>
    </header>
    <main>
      
    
<div className=" row center">
  {
    data.products.map((product)=> (
      <Product key ={product._id} product={product}> </Product>
    ))
  }
</div>
    </main>
    <footer className="row center">
All right reserved
    </footer>  
</div>
</BrowserRouter>
  );
}

export default App;
