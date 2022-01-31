import React, { useEffect, useState } from "react";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Modal from "../modal/Modal";
import http from "../../http";

import "../../styles/createPersonalInfo.scss";

const areaOptions = [];
const countryOption = [];
const citiOption = [];
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

export default function CreatePersonalInfo({ visibily, hideModal }) {
  const [user, setUser] = useState({
    firstname: null,
    lastname: null,
    patronymic: null,
    birthDate: null,
  });

  const [selectedcountryOption, setSelectedcountryOption] = useState({
    value: "Q159",
  });
  const [selectAreaOptions, setSelectAreaOptions] = useState({
    name: "Воро",
    countryId: "Q159",
    regionCode: "VOR",
  });
  const [selectedCitiOption, setSelectedCitiOption] = useState(null);
  const [selectedSexOption, setSelectedSexOption] = useState(null);
  const [selectedPersonStatusOption, setSelectedPersonStatusOption] =
    useState(null);

  const notifySuccess = (txt) => toast.success(txt);
  const notifyError = (txt) => toast.error(txt);

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const data = user;
    data[name] = value;
    setUser(data);
  };

  useEffect(() => {
    http
      .post("location/country", {
        name: "Ру",
        languageCode: "RU",
      })
      .then((response) => {
        response.data.data.map((el) => {
          countryOption.push({
            value: el.wikiDataId,
            label: el.name,
            code: el.code,
            name: el.currencyCodes[0],
          });
        });
      });
  }, []);

  useEffect(() => {
    http
      .post("location/region", {
        name: selectedcountryOption.name,
        languageCode: "RU",
        countryId: selectedcountryOption.value,
      })
      .then((response) => {
        response.data.data.map((el) => {
          areaOptions.push({
            value: el.countryCode,
            label: el.name,
            fipsCode: el.fipsCode,
            regionCode: el.isoCode,
            wikiDataId: el.wikiDataId,
          });
        });
      });
  }, [selectedcountryOption]);

  useEffect(() => {
    http
      .post("location/city", {
        name: selectAreaOptions.name,
        languageCode: "RU",
        countryId: selectedcountryOption.value,
        regionCode: selectAreaOptions.regionCode,
      })
      .then((response) => {
        response.data.data.map((el) => {
          citiOption.push({
            value: el.countryCode,
            label: el.name,
            id: el.id,
            wikiDataId: el.wikiDataId,
            type: el.type,
            regionCode: el.regionCode,
            countryCode: el.countryCode,
          });
        });
      });
  }, [selectAreaOptions]);

  const submitForm = (e) => {
    e.preventDefault();
    http
      .put("user/profile/personal", {
        firstname: user.firstname,
        lastname: user.lastname,
        patronymic: user.patronymic,
        sex: selectedSexOption.value,
        birthDate: user.birthDate,
        personStatusId: selectedPersonStatusOption.value,
        languageCode: "RU",
        location: {
          languageCode: "RU",
          country: {
            code: selectedcountryOption.code,
            currencyCodes: [selectedcountryOption.name],
            name: selectedcountryOption.label,
            wikiDataId: selectedcountryOption.value,
          },
          region: {
            countryCode: selectAreaOptions.value,
            fipsCode: selectAreaOptions.fipsCode,
            isoCode: selectAreaOptions.isoCode,
            name: selectAreaOptions.label,
            wikiDataId: selectAreaOptions.wikiDataId,
          },
          city: {
            id: selectedCitiOption.id,
            wikiDataId: selectedCitiOption.wikiDataId,
            type: selectedCitiOption.type,
            city: selectedCitiOption.city,
            name: selectedCitiOption.label,
            regionCode: selectedCitiOption.regionCode,
            countryCode: selectedCitiOption.countryCode,
          },
        },
      })
      .then((response) => {
        notifySuccess("Успешно");
      })
      .catch((err) => {
        notifyError("Ошибка", err);
      });
  };

  return (
    <div>
      <ToastContainer />
      <Modal
        visibily={visibily}
        hide={hideModal}
        title={"Личные данные"}
        content={
          <div className="p_info">
            <p className="title">
              Если ты заполнишь это поле, то получишь возможности общаться с
              людьми, получать бонусы
            </p>
            <form className="form" onSubmit={submitForm}>
              <div className="input_group">
                <input
                  type="text"
                  name="firstname"
                  onChange={handleUserInput}
                  className="__input"
                  placeholder="Фамилия"
                />
              </div>
              <div className="input_group">
                <input
                  type="text"
                  className="__input"
                  name="lastname"
                  onChange={handleUserInput}
                  placeholder="Имя"
                />
              </div>
              <div className="input_group">
                <input
                  type="text"
                  className="__input"
                  name="patronymic"
                  onChange={handleUserInput}
                  placeholder="Отчество"
                />
              </div>
              <div className="input_group">
                <Select
                  defaultValue={selectedSexOption}
                  onChange={setSelectedSexOption}
                  options={sexOption}
                  placeholder="Пол"
                />
              </div>
              <div className="input_group">
                <input
                  type="date"
                  className="__input"
                  id="start"
                  name="trip-start"
                  defaultValue="2002-12-08"
                ></input>
              </div>
              <div className="input_group">
                <Select
                  defaultValue={selectedPersonStatusOption}
                  onChange={setSelectedPersonStatusOption}
                  options={personStatus}
                  placeholder="Статус"
                />
              </div>
              <div className="input_group">
                <Select
                  defaultValue={selectedcountryOption}
                  onChange={setSelectedcountryOption}
                  options={countryOption}
                  placeholder="Страна"
                />
              </div>
              <div className="input_group">
                <Select
                  defaultValue={selectAreaOptions}
                  onChange={setSelectAreaOptions}
                  options={areaOptions}
                  placeholder="Регион"
                />
              </div>
              <div className="input_group">
                <Select
                  defaultValue={selectedCitiOption}
                  onChange={setSelectedCitiOption}
                  options={citiOption}
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
