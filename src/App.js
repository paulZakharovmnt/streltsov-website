import "./App.css";
import Nav from "./components/Header/Nav";
import Swiper from "./components/Swiper";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import ProductInfoPage from "./components/ProductInfoPage";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { setProductsToStateFromFB } from "./redux/actions/actions";
import { productsByIdTEST } from "./core/TestProducts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProductsToStateFromFB(productsByIdTEST));
  }, []);

  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
        </header>
        <Switch>
          <Route path="/" component={Swiper} exact />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/products/:childLink" component={Products} exact />
          <Route
            path="/products/:childLink/:productId"
            component={ProductInfoPage}
          />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
