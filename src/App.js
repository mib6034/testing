import "./App.css";
import Login from "./Components/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ='/'>
            <Login/>
          </Route>
          <Route path='/Home'>
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
