import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPlus,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import http from "../../http";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatePersonalInfo from "../user/CreatePersonalInfo";
import "../../styles/profile.scss";
import CreateSkils from "../user/CreateSkils";

const sexOption = [
  {
    value: 0,
    label: "женский",
  },
  {
    value: 1,
    label: "мужской",
  },
];

const personStatus = [
  {
    value: 1,
    label: "Школьник",
  },
  {
    value: 2,
    label: "Студент",
  },
  {
    value: 3,
    label: "Специалист",
  },
];

export default function Profile() {
  const [personalInfoModal, setPersonalInfoModal] = useState(false);
  const [skilsModal, setSkilsModal] = useState(false);
  const [personalInfo, setPersonalInso] = useState([]);

  const notifySuccess = (txt) => toast.success(txt);
  const notifyError = (txt) => toast.error(txt);

  const showPersonalInfoModal = () => {
    setPersonalInfoModal(true);
  };

  const hidePersonalInfoModal = () => {
    setPersonalInfoModal(false);
  };

  const showSkilsModal = () => {
    setSkilsModal(true);
  };

  const hideSkilsModal = () => {
    setSkilsModal(false);
  };

  useEffect(() => {
    http.get("user/profile/personal").then((response) => {
      setPersonalInso(response.data);
    });
  }, []);

  const removeSkil = (el) => {
    http
      .delete(`user/skill/${el.id}`)
      .then((response) => {
        notifySuccess("Успешно");
      })
      .catch((err) => {
        notifyError(`Ошибка ${err.message}`);
      });
  };

  return (
    <div>
      <CreatePersonalInfo
        visibily={personalInfoModal}
        hideModal={hidePersonalInfoModal}
      />
      <CreateSkils visibily={skilsModal} hideModal={hideSkilsModal} />
      <ToastContainer />
      <div className="pofile">
        <div className="left__box">
          <Header />
          <div className="info">
            <div className="l__box">
              <ul>
                <li>Регистрация</li>
                <li>Личный кабинет</li>
              </ul>
            </div>
            <div className="r__box">
              <div className="user_action">
                <div className="btn_file">
                  <span>
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </div>
                <div className="user__info">
                  <p className="name">Ностальгия Ретровая</p>
                  <span>
                    <h4>RU</h4>
                    <p>Москва</p>
                  </span>
                </div>
              </div>
              <div className="btns">
                <div className="btn_boxsh">
                  <button>Заполните профиль</button>
                </div>
                <div className="btn">
                  <button onClick={() => showPersonalInfoModal()}>
                    Личные данные
                  </button>
                </div>
                <div className="btn">
                  <button onClick={() => showSkilsModal()}>Навыки</button>
                </div>
              </div>
              {personalInfo?.personStatusId === null ? (
                <div className="personal_info">
                  <div className="personal_info__head">
                    <p>Личные данные</p>
                    <span>
                      <FontAwesomeIcon icon={faEdit} />
                    </span>
                  </div>
                  <div className="region">
                    <span>
                      <h4>{personalInfo.location.languageCode}</h4>
                      <p>{personalInfo.location.country}</p>
                    </span>
                    <span>
                      <p className="icon">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </p>
                      <p>{personalInfo.location.region}</p>
                    </span>
                  </div>
                  <div className="user_personal_info">
                    <p>Пол: {sexOption[personalInfo.sex]}</p>
                    <p>Возраст:{personStatus.birthDate}</p>
                    <p>Cтатус: {personStatus[personalInfo.personStatusId]}</p>
                  </div>
                </div>
              ) : null}
              {personalInfo.skills !== 0 ? (
                <div className="skills">
                  <div className="skills__head">
                    <p>Личные данные</p>
                    <span>
                      <FontAwesomeIcon icon={faEdit} />
                    </span>
                  </div>
                  <div className="skills_btn">
                    {personalInfo.skills?.map((el) => {
                      return (
                        <button key={el.id}>
                          {el.name}{" "}
                          <span onClick={() => removeSkil(el)}>{"x"}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="right__box"></div>
      </div>
    </div>
  );
}
