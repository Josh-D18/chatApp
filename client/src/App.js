import { Component } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Friends from "./components/Friends/Friends";
import Profile from "./components/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <ProtectedRoute exact path="/chat" />
            <ProtectedRoute exact path="/friends" component={Friends} />
            <ProtectedRoute exact path="/profile" component={Profile} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
