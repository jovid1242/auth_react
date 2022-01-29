import React from "react";
import { Link } from "react-router-dom";
import "../../styles/login.scss";

export default function Login() {
  return (
    <div>
      <div className="login">
        <div className="register__wrapper">
          <form className="form">
            <div className="form__head">
              <Link to="">Авторизация</Link>
              <Link to="/Register">Регистрация</Link>
            </div>
            <div className="form__main">
              <div className="form__group">
                <label htmlFor="">E-mail</label>
                <input type="text" placeholder="E-mail" />
              </div>
              <div className="form__group">
                <label htmlFor="">Пароль</label>
                <input type="text" placeholder="Пароль" />
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
