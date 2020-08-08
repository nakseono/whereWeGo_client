import React, { useState } from "react";
import { Link, Route, withRouter, useHistory } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPw] = useState("");
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPw(e.target.value);
  };

  return <div></div>;
}
