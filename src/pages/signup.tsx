import React, { useState } from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPw] = useState("");
  const [username, setName] = useState("");
  const history = useHistory();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          axios
            .post("http://localhost:4000/signUp", {
              email: email,
              password: password,
              username: username,
            })
            .then((res) => {
              history.push("/");
            })
            .catch((err) => console.log(err));
        }}
      >
        <div>
          <input
            type="email"
            placeholder="이메일을 입력 해주세요."
            onChange={handleEmail}
          ></input>
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호를 입력 해주세요."
            onChange={handlePw}
          ></input>
        </div>
        <div>
          <input
            placeholder="사용할 닉네임을 입력해주세요."
            onChange={handleName}
          ></input>
        </div>
        <div>
          <Link to="/login">이미 아이디가 있으신가요?</Link>
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
