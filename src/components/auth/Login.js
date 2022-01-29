import React, { useState } from "react";
import { Link } from "react-router-dom";
import http from "../../http";
import { ToastContainer, toast } from "react-toastify";
import lStorage from "./LStorage";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "../../styles/login.scss";

export default function Login() {
  const [user, setUser] = useState({
    username: null,
    password: null,
  });

  let navigate = useNavigate();

  const notifySuccess = (txt) => toast.success(txt);
  const notifyError = (txt) => toast.error(txt);

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const data = user;
    data[name] = value;
    setUser(data);
  };

  const submitForm = (e) => {
    e.preventDefault();
    http
      .post("sso/signin", user)
      .then((response) => {
        notifySuccess("Успешно");
        lStorage.LoginStorage({
          id: response.data.id,
          username: response.data.username,
          token: response.data.token,
        });
        navigate("/profile");
      })
      .catch((err) => {
        notifyError("Ошибка", err);
      });
  };

  return (
    <div>
      <ToastContainer />
      <div className="login">
        <div className="register__wrapper">
          <form className="form" onSubmit={submitForm}>
            <div className="form__head">
              <Link to="">Авторизация</Link>
              <Link to="/Register">Регистрация</Link>
            </div>
            <div className="form__main">
              <div className="form__group">
                <label htmlFor="">E-mail</label>
                <input
                  type="text"
                  name="username"
                  onChange={handleUserInput}
                  placeholder="E-mail"
                />
              </div>
              <div className="form__group">
                <label htmlFor="">Пароль</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleUserInput}
                  placeholder="Пароль"
                />
              </div>
              <div className="form__send btn">
                <button>Авторизация</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
