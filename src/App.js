import "./App.css";
import Nav from "./components/Header/Nav";
import Products from "./components/Products/Products";
import ProductInfoPage from "./components/ProductInfoPage";
import Footer from "./components/Footer/Footer";
import ProductsPageByType from "./components/Products/ProductsPageByType";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { setProductsToStateFromFB } from "./redux/actions/actions";
import { productsByIdTEST } from "./core/TestProducts";
import CartPreview from "./components/Cart/CartPreview";
import Home from "./components/Home/Home";
import BreadCrumbs from "./components/AdditionalComponents/BreadCrumbs";
import Contact from "./components/Contact/Contact";

function App() {
  const showCartPreview = useSelector((state) => state.cartPreviewReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProductsToStateFromFB(productsByIdTEST));
  }, []);

  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
          <BreadCrumbs />
        </header>

        <CSSTransition
          in={showCartPreview}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          classNames="cp"
        >
          <CartPreview />
        </CSSTransition>

        <Switch>
          <Route path="/products" component={Products} exact />
          <Route
            path="/products/:childLink"
            component={ProductsPageByType}
            exact
          />
          <Route path="/contact" component={Contact} exact />
          <Route path="/" component={Home} exact />

          {/* <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/products/:childLink" component={Products} exact />
          <Route
            path="/products/:childLink/:productId"
            component={ProductInfoPage}
          /> */}
          <Route
            path="/products/:childLink/:productId/"
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
