import React, { useState } from "react";
import { Link } from "react-router-dom";
import http from "../../http";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "../../styles/register.scss";

export default function Registration() {
  const [user, setUser] = useState({
    username: null,
    password: null,
    conpassword: null,
    mailing: true,
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
    if (user.password === user.conpassword) {
      http
        .post("signup", user)
        .then((response) => {
          notifySuccess("Успешно");
          navigate("/confirm");
        })
        .catch((err) => {
          console.log("Ошибка", err);
        })
        .finally(() => {
          notifyError("Что-то пошло не так");
        });
    } else {
      notifyError("Пароль не совподают");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="register">
        <div className="register__wrapper">
          <form className="form" onSubmit={submitForm}>
            <div className="form__head">
              <Link to="">Регистрация</Link>
              <Link to="/login">Войти</Link>
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
              <div className="form__group">
                <label htmlFor="">Пароль</label>
                <input
                  type="password"
                  name="conpassword"
                  onChange={handleUserInput}
                  placeholder="Пароль"
                />
              </div>
              <div className="form__send btn">
                <button>Регистрация</button>
              </div>
            </div>
            <div className="form__footer">
              <div className="form__check">
                <label htmlFor="chek1">
                  <input type="checkbox" id="chek1" />
                  <span>
                    Соглашаюсь на получение рассылки по электронной почте
                  </span>
                </label>
              </div>
              <div className="form__check">
                <label htmlFor="chek2">
                  <input type="checkbox" id="chek2" />
                  <span>
                    Соглашаюсь с{" "}
                    <Link to="#">политикой обработки персональных данных</Link>
                  </span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
