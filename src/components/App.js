import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ListItem from "../pages/ListItem";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/items/:id' component={ListItem} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
