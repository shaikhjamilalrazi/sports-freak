import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Detail-Section/Detail";
import NoMatch from "./components/NoMatch/NoMatch";
import HomeSection from "./components/Home-Section/HomeSection";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Router>
          <div>
            <Switch>
              <Route path="/detail/:id">
                <Detail />
              </Route>
              <Route path="/Home">
                <HomeSection />
              </Route>
              <Route exact path="/">
                <HomeSection />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
