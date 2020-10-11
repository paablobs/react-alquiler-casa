import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <a>Hello world</a>
        <Footer />
      </div>
    );
  }
}

export default App;
