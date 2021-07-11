
import React from 'react';
import { BrowserRouter, Link, Route, Switch, Router } from 'react-router-dom';
import Demo from './components/demo';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import  CartScreens from './screens/CartScreens';
import { useSelector } from 'react-redux';

function App() {
 const cart = useSelector(state => state.cart)
 const {cartItems}=cart;
  return (
    <BrowserRouter>

      <div className="grid_container">
        <header className="row">
          <div>
            <Link
             className="BRAND" to="/">AMAZONA</Link>
          </div>
          <div>
            <Link to="/cart">cart
            {cartItems.length>0 &&(
              <span className="badge">{cartItems.length}</span>
            )}
            </Link>
            <Link to="/sign in">sign in</Link>
          </div>
        </header>
        <main>

          <Switch>
          <Route path="/cart/:id?" >
              <CartScreens/>

              </Route>
            <Route exact path="/" >
              <HomeScreen />
            </Route>
            <Route path="/product/:id">
              <ProductScreen />
            </Route>
          </Switch>
        </main>
        <footer className="row center">
          All right reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
