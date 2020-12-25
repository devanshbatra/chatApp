import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Chat from "./components/Chat";
import Join from "./components/Join";

const App = () => {

  return (
    <div className="App">
      <div className="main-container">
        <Router>
          <Route path="/chatApp" exact component={Join} />
          <Route path="/chatApp/chat" component={Chat} />
        </Router>
      </div>
    </div>
  );


}



export default App;
