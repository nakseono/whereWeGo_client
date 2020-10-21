import React, { useState } from "react";
import { Link, Route, withRouter, useHistory } from "react-router-dom";
import axios from "axios";
import "./css/login.css";

axios.defaults.withCredentials = true;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPw] = useState("");
  const history = useHistory();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  return (
    <div id="loginBox">
      <p id="loginTitle">Where We Go ?</p>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          return axios
            .post("http://localhost:4000/signIn", {
              email: email,
              password: password,
            })
            .then(() => {
              history.push("/");
            })
            .catch((err) => console.log(err));
        }}
      >
        <div>
          <input
            type="email"
            placeholder="이메일을 입력 해주세요."
            className="EmailBox"
            onChange={handleEmail}
          ></input>
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호를 입력 해주세요."
            className="PwBox"
            onChange={handlePw}
          ></input>
        </div>
        <button type="submit" className="loginBox signInBtn">
          로그인
        </button>
        <div id="hrLineBox">
          <hr className="hrLine"></hr>
          <span id="hrText">또는</span>
          <hr className="hrLine"></hr>
        </div>
        <Link to="/signUp">
          <button className="loginBox signUpBtn">아직 아이디가 없다면?</button>
        </Link>
      </form>
    </div>
  );
}
