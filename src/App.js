import './App.css';
import {BrowserRouter as Router, Link, Redirect, Route, Switch, useLocation, useParams} from "react-router-dom";
import React from "react";
import Main from "./components/Main";
import Fuzzer from "./components/Fuzzer";
import Login from "./components/Login";
import Reset from "./components/Reset";
import Registration from "./components/Registration";


function App() {

    let author = false;

    return (
        <div className="App">

            <Switch>
                <Route exact path='/' render={() => {
                    return author ? <Fuzzer/> : <Main insider={<Login/>}/>;
                }
                }/>
                <Route path='/login' render={() => <Main insider={<Login/>}/>}/>
                <Route path="/registration" render={() => <Main insider={<Registration/>}/>}/>
                <Route path="/reset" render={() => <Main insider={<Reset/>}/>}/>
                <Route path='/fuzzers' component={Fuzzer}/>
                <Redirect to='/'/>
            </Switch>
        </div>

    );
}

export default App;
