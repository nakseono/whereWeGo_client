import React, { useState } from "react";
import "./App.css";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import axios from "axios";

// import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/signup";

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <div>
      <Switch>
        {/* <Route exact path="/" render={() => <Main />} /> */}
        <Route path="/login" render={() => <Login /* isLogin={isLogin} *//>} />
        <Route
          exact
          path="/signUp"
          render={() => <Signup /* isLogin={isLogin} */ />}
        />
      </Switch>
    </div>
  );
}

export default App;
