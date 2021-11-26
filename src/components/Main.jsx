import React from 'react';
import PropTypes from 'prop-types';
import Login from "./Login";
import {
    BrowserRouter as Router,
    Link,
    Redirect,
    Route,
    Switch,
    useLocation,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Reset from "./Reset";
import Registration from "./Registration";

const Main = (props) => {
    const mainStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100vh'
    };
    console.log('I was rendered');

    return (

           //Styles for dividing blocks
             <div style={mainStyle}>
                    <div style={{flex: '2', backgroundColor: 'teal'}}>MAIN!</div>
                    <div style={{flex: '1', backgroundColor: 'fuchsia'}}>{props.insider}</div>
                </div>




    );
};

Main.propTypes = {};

export default Main;