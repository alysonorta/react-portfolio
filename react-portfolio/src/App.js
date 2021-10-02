import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Navigation from "./components/Navigation";

import myProjects from "./myProjects";


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
      <Project myProjects={myProjects} />

      <Footer />
    </div>
  );
}

export default App;
