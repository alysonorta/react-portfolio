import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Navigation from "./components/Navigation";




const appStyles = {
  app: {
    backgroundColor: "white",
    font: "Open Sans Condensed",
  },
};

function App() {
  return (
    <div style={appStyles.app}>
      <Header />
      <Navigation />
      <Project />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
