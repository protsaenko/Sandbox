import React from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";


function SubPage() {
  let { anyIdNameYouLike } = useParams();

  return (
      <div>
          <h1>{anyIdNameYouLike}</h1>
      </div>
  );
}

const Main = (props) => {
  const mainStyle = {
    display: "flex",
    justifyContent: "space-between",
    height: "100vh",
  };

  console.log("I was rendered");


  let { path, url } = useRouteMatch();

  return (
    //Styles for dividing blocks
    <div style={mainStyle}>
      <div style={{ flex: "2", backgroundColor: "teal" }}>MAIN!</div>
      <div style={{ flex: "1", backgroundColor: "fuchsia" }}>
            <h1>Third Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={`${url}/login`}>login</Link>
                    </li>
                    <li>
                        <Link to={`${url}/registration`}>registration</Link>
                    </li>
                    <li>
                        <Link to={`${url}/reset`}>reset</Link>
                    </li>
                </ul>
            </nav>
            <hr />
      <Switch>
                <Route exact={true} path={path}>
                    <h3>Please select a sub-page.</h3>
                </Route>
                <Route path={`${path}/:anyIdNameYouLike`}>
                    <SubPage />
                </Route>
            </Switch>
      </div>
    </div>
  );
};

Main.propTypes = {};

export default Main;
