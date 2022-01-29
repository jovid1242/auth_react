import React, { useState } from "react";
import Header from "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPlus,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import CreatePersonalInfo from "../user/CreatePersonalInfo";
import "../../styles/profile.scss";
import CreateSkils from "../user/CreateSkils";

export default function Profile() {
  return (
    <div>
      {/* <CreatePersonalInfo /> */}
      <CreateSkils />
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
                  <button>Личные данные</button>
                </div>
                <div className="btn">
                  <button>Навыки</button>
                </div>
              </div>
              <div className="personal_info">
                <div className="personal_info__head">
                  <p>Личные данные</p>
                  <span>
                    <FontAwesomeIcon icon={faEdit} />
                  </span>
                </div>
                <div className="region">
                  <span>
                    <h4>RU</h4>
                    <p>Россия</p>
                  </span>
                  <span>
                    <p className="icon">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </p>
                    <p>Москва</p>
                  </span>
                </div>
                <div className="user_personal_info">
                  <p>Cтатус: Студент</p>
                  <p>Возраст: 35 лет</p>
                  <p>Cтатус: Студент</p>
                </div>
              </div>
              <div className="skills">
                <div className="skills__head">
                  <p>Личные данные</p>
                  <span>
                    <FontAwesomeIcon icon={faEdit} />
                  </span>
                </div>
                <div className="skills_btn">
                  <button>developer</button>
                  <button>js</button>
                  <button>develdfvfdvoper</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right__box"></div>
      </div>
    </div>
  );
}
