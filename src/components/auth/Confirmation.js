import React, { useEffect, useState } from "react";
import http from "../../http";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "../../styles/confirm.scss";

export default function Confirmation() {
  const [startValue, setStartValue] = useState("");
  const [andValue, setAndValue] = useState("");

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
        .post("signup/confirm", {
          userId: 96,
          confirmationCode: `${startValue}-${andValue}`,
        })
        .then((response) => {
          http
            .post("signup/activate/personal", {
              userId: 96,
              firstname: "Test",
              lastname: "Testoff",
              login: "sp1i3ighrr@coffeetimer24.com",
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
            placeholder="1"
          />
          <input
            type="text"
            className="code-input"
            onChange={handleInput}
            maxLength="1"
            placeholder="2"
          />
          <input
            type="text"
            className="code-input"
            maxLength="1"
            onChange={handleInput}
            placeholder="3"
          />
          <div className="code">-</div>
          <input
            type="text"
            className="code-input"
            maxLength="1"
            onChange={handleInput}
            placeholder="4"
          />
          <input
            type="text"
            className="code-input"
            maxLength="1"
            onChange={handleInput}
            placeholder="5"
          />
          <input
            type="text"
            className="code-input"
            maxLength="1"
            onChange={handleInput}
            placeholder="6"
          />
        </form>
      </div>
    </div>
  );
}
