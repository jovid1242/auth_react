import React, { useState } from "react";

import Modal from "../modal/Modal";
import "../../styles/createSkils.scss";

export default function CreateSkils() {
  const [modal, setModal] = useState(true);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };
  return (
    <div>
      <Modal
        visibily={modal}
        hide={hideModal}
        title={"Навыки"}
        content={
          <div className="skils_modal">
            <p className="title">Навыки</p>
            <div className="skils__btns">
              <button>
                Программирование
                <span>x</span>
              </button>
              <button>
                jk
                <span>x</span>
              </button>
            </div>
            <form className="form">
              <div className="input_group">
                <input
                  type="text"
                  className="__input"
                  placeholder="Добавить категорию"
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
