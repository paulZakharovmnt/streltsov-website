import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Auth from "./components/Admin/Auth";
import CustomersSide from "./CustomersSide";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/streltsov-website/" component={CustomersSide} />
          <Route path="/admin" component={Admin} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
