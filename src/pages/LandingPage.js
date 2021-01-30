import React, { Component } from "react";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Products from "../components/Products";
import { ProductData, ProductDataTwo } from "../components/Products/data";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Hero />
        <Products heading="Choose your favorite" data={ProductData} />
        <Feature />
        <Products heading="Sweet Treats for you" data={ProductDataTwo} />
      </div>
    );
  }
}

export default LandingPage;
