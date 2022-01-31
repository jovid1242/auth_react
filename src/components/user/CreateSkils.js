import React, { useState } from "react";
import http from "../../http";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Modal from "../modal/Modal";
import "../../styles/createSkils.scss";

export default function CreateSkils({ visibily, hideModal }) {
  const [skil, setSkil] = useState({
    name: null,
  });
  const [skils, setSkils] = useState([]);

  const notifySuccess = (txt) => toast.success(txt);
  const notifyError = (txt) => toast.error(txt);

  const submitForm = (e) => {
    e.preventDefault();
    setSkils((prev) => [skil, ...prev]);
    http
      .post("user/skill", { name: skil })
      .then((response) => {
        notifySuccess("Успешно");
        setSkils((prev) => [skil, ...prev]);
      })
      .catch((err) => {
        notifyError("Ошибка", err);
      });
  };

  const deleteSkil = (el) => {
    const result = skils.filter((item) => item.name !== el.name);
    notifySuccess("Успешно удалена");
    setSkils(result);
  };

  return (
    <div>
      <ToastContainer />
      <Modal
        visibily={visibily}
        hide={hideModal}
        title={"Навыки"}
        content={
          <div className="skils_modal">
            <p className="title">Навыки</p>
            <div className="skils__btns">
              {skils?.map((el, i) => {
                return (
                  <button key={i}>
                    {el.name}
                    <span onClick={() => deleteSkil(el)}>x</span>
                  </button>
                );
              })}
            </div>
            <form className="form" onSubmit={submitForm}>
              <div className="input_group">
                <input
                  type="text"
                  name="skil"
                  value={skil.name}
                  onChange={(e) => setSkil({ name: e.target.value })}
                  className="__input"
                  placeholder="Пример: javascript"
                />
              </div>
              <div className="form_btn">
                <button>Сохранить</button>
              </div>
            </form>
          </div>
        }
      />
    </div>
  );
}
