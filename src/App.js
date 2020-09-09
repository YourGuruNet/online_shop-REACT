import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/Cart";
import Default from "./components/Default";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

// Using react Route to switch between pages
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ProductList" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
