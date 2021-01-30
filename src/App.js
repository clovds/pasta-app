import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./globalStyles";
import Footer from "./components/Footer";
import { LandingPage } from "./pages";
import Sidebar from "./components/Sidebar";
import SidebarLogin from "./components/SidebarLogin";

class App extends Component {
  state = {
    isOpen: false,
    isOpenLogin: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggleLogin = () => {
    this.setState({ isOpenLogin: !this.state.isOpenLogin });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <SidebarLogin
          isOpen={this.state.isOpenLogin}
          toggle={this.toggleLogin}
        />
        <Sidebar isOpen={this.state.isOpen} toggle={this.toggle} />
        <Navbar toggle={this.toggle} toggleLogin={this.toggleLogin} />
        <Route path="/" exact component={LandingPage} />
        <Footer />
      </div>
    );
  }
}

export default App;

// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Feature from "./components/Feature";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Products from "./components/Products";
// import { ProductData, ProductDataTwo } from "./components/Products/data";
// import { GlobalStyle } from "./globalStyles";

// function App() {
//   return (
//     <Router>
//       <GlobalStyle />
//       <Hero />
//       <Products heading="Choose your favorite" data={ProductData} />
//       <Feature />
//       <Products heading="Sweet Treats for you" data={ProductDataTwo} />
//       <Footer />
//     </Router>
//   );
// }
