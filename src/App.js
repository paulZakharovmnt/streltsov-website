import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Header/Nav";
import Swiper from "./components/Swiper";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
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
        </Switch>
        {/* <main>
          <Swiper />
        </main> */}
        <footer>
          <Footer />{" "}
        </footer>
      </div>
    </Router>
  );
}

export default App;
