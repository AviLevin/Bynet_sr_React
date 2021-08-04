import "./App.css";
import Nav from "../src/components/Nav/Nav";
import Employees from "./components/Employees/Employees";
import EmployeesHK from "./components/Employees/EmployeesHK/EmployeesHK"

import About from "./components/About/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/">
            <Employees />
          </Route>

          <Route path="/About">
            <About />
          </Route>
          <Route path="/HK">
            <EmployeesHK />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
