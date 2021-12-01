import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  //console.log('paramsLo',useParams());
  return (
    <div>
      LOGIN
      <ul>
        <li>
          <Link to="/reset">Forgot</Link>
          <button>Forgot(Reset)</button>
        </li>
        <li>
          <button>Login(ACTION)</button>
        </li>
        <li>
          <Link to="/registration">Register</Link>
          <button>Register(Registration)</button>
        </li>
      </ul>
    </div>
  );
};

Login.propTypes = {};

export default Login;
