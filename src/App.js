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
import About from "./components/About/About";
import BreadCrumbs from "./components/AdditionalComponents/BreadCrumbs";
import Contact from "./components/Contact/Contact";
import CartPage from "./components/Cart/CartPage";
import ScrollToTop from "react-router-scroll-top";

function App() {
  const showCartPreview = useSelector((state) => state.cartPreviewReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProductsToStateFromFB(productsByIdTEST));
  }, []);

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <header>
            <Nav />
            <BreadCrumbs />
          </header>

          <Switch>
            <Route path="/streltsov-website/" component={Home} exact />
            <Route path="/streltsov-website/about" component={About} />
            <Route
              path="/streltsov-website/contact"
              component={Contact}
              exact
            />
            <Route path="/streltsov-website/cart" component={CartPage} />
            <Route
              path="/streltsov-website/products"
              component={Products}
              exact
            />
            <Route
              path="/streltsov-website/products/:childLink"
              component={ProductsPageByType}
              exact
            />
            <Route
              path="/streltsov-website/products/:childLink/:productId/"
              component={ProductInfoPage}
            />
          </Switch>

          <CSSTransition
            in={showCartPreview}
            timeout={1000}
            mountOnEnter
            unmountOnExit
            classNames="cp"
          >
            <CartPreview />
          </CSSTransition>
          <footer>
            <Footer />
          </footer>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
