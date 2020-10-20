import React, { useState } from "react";
import { Link, Route, withRouter, useHistory } from "react-router-dom";
import axios from "axios";
import './css/login.css'

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
    <div>
      <h1>Sign In</h1>
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
        <div >
          <input
            type="email"
            placeholder="이메일을 입력 해주세요."
            className="loginBox"
            onChange={handleEmail}
          ></input>
        </div>
        <div >
          <input
            type="password"
            placeholder="비밀번호를 입력 해주세요"
            className="loginBox"
            onChange={handlePw}
          ></input>
        </div>
        <div>
          <Link to="/signUp">아직 아이디가 없다면?</Link>
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
