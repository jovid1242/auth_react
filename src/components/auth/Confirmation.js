import React, { useEffect, useState } from "react";
import http from "../../http";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "../../styles/confirm.scss";

export default function Confirmation() {
  const [startValue, setStartValue] = useState("");
  const [andValue, setAndValue] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  let navigate = useNavigate();

  const notifySuccess = (txt) => toast.success(txt);
  const notifyError = (txt) => toast.error(txt);

  const handleInput = (val) => {
    if (startValue.length !== 3) {
      setStartValue((prev) => prev + val.target.value);
    } else {
      setAndValue((prev) => prev + val.target.value);
    }
  };

  useEffect(() => {
    sendForm();
  }, [andValue]);

  const sendForm = () => {
    if (andValue.length === 3) {
      http
        .post("sso/signup/confirm", {
          userId: user.id,
          confirmationCode: `${startValue}-${andValue}`,
        })
        .then((response) => {
          http
            .post("sso/signup/activate/personal", {
              userId: user.id,
              firstname: "Test",
              lastname: "Testoff",
              login: user.username,
              confirmationCode: `${startValue}-${andValue}`,
            })
            .then(() => {
              notifySuccess("Успешно");
              navigate("/login");
            })
            .catch((err) => {
              notifyError("Ошибка", err);
            });
        })
        .catch((err) => {
          notifyError("Ошибка", err);
        });
    }
    return;
  };

  return (
    <div className="confirm">
      <ToastContainer />
      <div className="confirm__wrapper">
        <p className="title">Введите код подтверждения</p>
        <p className="to_mail">Мы отправили письмо на masha@zenina.com</p>
        <form className="form">
          <input
            type="text"
            className="code-input"
            maxLength="1"
            onChange={handleInput}
            placeholder="0"
          />
          <input
            type="text"
            className="code-input"
            onChange={handleInput}
            maxLength="1"
            placeholder="0"
          />
          <input
            type="text"
            className="code-input"
            maxLength="1"
            onChange={handleInput}
            placeholder="0"
          />
          <div className="code">-</div>
          <input
            type="text"
            className="code-input"
            maxLength="1"
            onChange={handleInput}
            placeholder="0"
          />
          <input
            type="text"
            className="code-input"
            maxLength="1"
            onChange={handleInput}
            placeholder="0"
          />
          <input
            type="text"
            className="code-input"
            maxLength="1"
            onChange={handleInput}
            placeholder="0"
          />
        </form>
      </div>
    </div>
  );
}
