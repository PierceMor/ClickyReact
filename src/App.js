import React, { Component } from 'react';
import Footer from "./components/footer";
import Banner from "./components/banner";
import Gamehost from "./components/gamehost";
import Navbar from "./components/Navbar.js";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <Gamehost />
        <Footer />
      </div>
    );
  }
}

export default App;
