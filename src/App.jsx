
import React from "react";
import { Provider } from "react-redux";
import store from "./component/Notestore";
import Header from "./component/Header";
import Dashboards from "./component/Dashbords";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="dashboard">
          <Dashboards />
        </div>
        <div className="header">
          <Header />
        </div>
      </div>
    </Provider>
  );
}

export default App;