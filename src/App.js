import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
  useLocation,
  useParams,
} from "react-router-dom";
import React from "react";
import Main from "./components/Main";
import Fuzzer from "./components/Fuzzer";
import Login from "./components/Login";
import Reset from "./components/Reset";
import Registration from "./components/Registration";

function App() {
  let author = false;
  const mainStyle = {
    display: "flex",
    justifyContent: "space-between",
    height: "100vh",
  };

  return (
    // <div style={mainStyle} className="App">
    //   <Route path="/" component={Main} />
    //   <div style={{ flex: "1", backgroundColor: "fuchsia" }}>
    //     <Route path="/login" component={Login} />
    //     <Route path="/registration" component={Registration} />
    //     <Route path="/reset" component={Reset} />
    //   </div>
    (author)? <Route path="/" component={Fuzzer} />:
    <div style={mainStyle} className="App">
      <Route path="/" component={Main} />
      <div style={{ flex: "1", backgroundColor: "fuchsia" }}>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/reset" component={Reset} />
      </div>





      {/*  
        <Redirect to="/" />
      */}
    </div>
  );
}

export default App;
