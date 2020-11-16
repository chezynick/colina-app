import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Frames from "./Frames";
import Nav from "./Nav";
import Footer from "./Footer";
import { ProductProvider } from "./Products";
import Header from "./Header";
import Bikes from "./Bikes";
import Wheels from "./Wheels";
import Basket from "./Basket";
import "./App.css";

const Routes = () => {
  const [BasketArr, setBasket] = useState([]);

  const basketHandler = (item) => {
    setBasket([...BasketArr, item]);
    return BasketArr;
  };
  const clearBasket = () => {
    setBasket([]);
    return BasketArr;
  };

  return (
    <HashRouter basename="/">
      <Header />
      <Nav BasketArr={BasketArr} />
      <Switch>
        <ProductProvider>
          <Route exact path="/" component={App} />
          <Route
            exact
            path="/frames"
            render={() => <Frames setBasket={basketHandler} />}
          />
          <Route
            path="/Bikes"
            render={() => <Bikes setBasket={basketHandler} />}
          />
          <Route
            path="/Wheels"
            render={() => <Wheels setBasket={basketHandler} />}
          />
          <Route
            path="/Basket"
            render={() => (
              <Basket BasketArr={BasketArr} clearBasket={clearBasket} />
            )}
          />
        </ProductProvider>
      </Switch>
      <Footer />
    </HashRouter>
  );
};
export default Routes;
