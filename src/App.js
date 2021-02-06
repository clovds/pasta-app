import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./globalStyles";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import SidebarLogin from "./components/SidebarLogin";
import { AnimatedRoutes, RouteTransition } from "./animation";
import LandingPage from "./pages/LandingPage";
import MenuPage from "./pages/MenuPage";

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
        <AnimatedRoutes exitBeforeEnter initial={false}>
          <RouteTransition exact path="/" slideUp={100}>
            <LandingPage />
          </RouteTransition>
          <RouteTransition path="/menu" slide={100}>
            <MenuPage />
          </RouteTransition>
        </AnimatedRoutes>
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
