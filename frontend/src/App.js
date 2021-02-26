import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
