import './App.css';
import {BrowserRouter as Router, Link, Redirect, Route, Switch, useLocation, useParams} from "react-router-dom";
import React from "react";
import Main from "./components/Main";
import Fuzzer from "./components/Fuzzer";
import Login from "./components/Login";
import Reset from "./components/Reset";
import Registration from "./components/Registration";


function Register() {
    return null;
}

function App() {
    const mainStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100vh'
    };

    /*
        const Reset = props => {
            return (
                <div>
                    Reset
                </div>
            );
        };
        const Register = props => {
            return (
                <div>
                    Register
                </div>
            );
        };
        const Login = props => {
            return (
                <div>
                    Login
                </div>
            );
        };
    */

    let author = false;

    return (
        <div className="App">
            {/*WORKING when mounted to app, main not used*/}
            {/*            <div style={mainStyle}>
                <div style={{flex: '2', backgroundColor: 'gray'}}>App
                    <ul>
                        <Link to="/">Main</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/reset">Reset</Link>
                        <Link to="/registration">Registration</Link>
                        <Link to="/fuzzers">Fuzzer</Link>
                    </ul>
                </div>*/}

            <div style={{flex: '1', backgroundColor: 'blue'}}>
                <Switch>
                    <Route exact path='/' render={() =>{

                      return author?<Fuzzer/>:<Main insider={<Login/>}/>;
                    }
                    }/> ///Add here if authorized - go to fuzzers, else - log in
                    <Route path='/login' render={() => <Main insider={<Login/>}/>}/>
                    <Route path="/registration" render={() => <Main insider={<Registration/>}/>}/>
                    <Route path="/reset" render={() => <Main insider={<Reset/>}/>}/>
                    <Route path='/fuzzers' component={Fuzzer}/>
                    <Redirect to='/'/>
                </Switch>
            </div>

        </div>


    );
}

export default App;
