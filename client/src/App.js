import { Component } from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <Header />
          <Route></Route>
        </section>
      </div>
    );
  }
}

export default App;
