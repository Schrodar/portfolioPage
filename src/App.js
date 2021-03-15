import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

//Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import MosiWork from "./pages/MosiWork";
import ContactMosi from "./pages/ContactMosi";
import ProjectDetail from "./pages/ProjectDetail";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

//animations import

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  window.onload = function () {
          window.scrollTo(0, 0);
   };
 
  return (
   
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
         <Route exact path="/">
           <AboutUs />
        </Route>
        <Route exact path="/work">
          <MosiWork />
        </Route>
        <Route path="/work/:id">
          <ProjectDetail />
        </Route>
        <Route path="/contact">
        <ContactMosi />
       </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}
export default App;