import React, { useState } from "react";
import Select from "react-select";

import Modal from "../modal/Modal";
import "../../styles/createPersonalInfo.scss";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function CreatePersonalInfo() {
  const [modal, setModal] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

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
        title={"Личные данные"}
        content={
          <div className="p_info">
            <p className="title">
              Если ты заполнишь это поле, то получишь возможности общаться с
              людьми, получать бонусы
            </p>
            <form className="form">
              <div className="input_group">
                <input type="text" className="__input" placeholder="Фамилия" />
              </div>
              <div className="input_group">
                <input type="text" className="__input" placeholder="Имя" />
              </div>
              <div className="input_group">
                <input type="text" className="__input" placeholder="Отчество" />
              </div>
              <div className="input_group">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Пол"
                />
              </div>
              <div className="input_group">
                <input
                  type="date"
                  className="__input"
                  id="start"
                  name="trip-start"
                  value="2002-12-08"
                ></input>
              </div>
              <div className="input_group">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Статус"
                />
              </div>
              <div className="input_group">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Россия"
                />
              </div>
              <div className="input_group">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Регион"
                />
              </div>
              <div className="input_group">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Город"
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
