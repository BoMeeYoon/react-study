import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Navigation from "./routes/Navigation.js";
import Detail from "./routes/Detail.js";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
