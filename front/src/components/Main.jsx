import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductsContainer from "../containers/ProductsContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
import CarruselContainer from "../containers/CarruselContainer";
import NavbarContainer from "../containers/NavbarContainer";
import CategoriesContainer from "../containers/CategoriesContainer";
import FilteredProductsContainer from "../containers/FilteredProductsContainer";
import AdminContainer from "../containers/AdminContainer";
import CartContainer from "../containers/CartContainer";
import ReviewContainer from "../containers/ReviewContainer";
import ShoppinghistoryContainer from "../containers/ShoppinghistoryContainer";
import Footer from "./Footer";

const Main = ({ history }) => {
  return (
    <React.Fragment>
      <NavbarContainer history={history} />
      <br />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <CarruselContainer />
              <CategoriesContainer />
              <ProductsContainer />
            </div>
          )}
        />
        <Route path="/categories/:name" component={FilteredProductsContainer} />
        <Route exact path="/review" component={ReviewContainer} />
        <Route exact path="/admin" component={AdminContainer} />
        <Route exact path="/cart" component={CartContainer} />
        <Route
          exact
          path="/shoppinghistory"
          component={ShoppinghistoryContainer}
        />
        <Route path="/products/:id" component={SingleProductContainer} />
        <Route path="/:search" component={FilteredProductsContainer} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default Main;
