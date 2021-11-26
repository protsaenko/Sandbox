import React from 'react';
import PropTypes from 'prop-types';
import {Link, Route, Switch, useParams} from "react-router-dom";
import Reset from "./Reset";
import Login from "./Login";


const Registration = props => {
    //console.log('paramsReg', useParams());
    return (
        <div>
            REGISTRATION
            <ul>
                <li>
                    <button>Register(ACTION)</button>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                    <button>Login(Login)</button>
                </li>
            </ul>

             {/*   <Route exact path='/' component={Login}/>*/}

        </div>
    );
};

Registration.propTypes = {};

export default Registration;