import React, { useEffect, useState } from "react";
import Select from "react-select";

import Modal from "../modal/Modal";
import http from "../../http";

import "../../styles/createPersonalInfo.scss";

const areaOptions = [];
const countryOption = [];
const citiOption = [];

export default function CreatePersonalInfo({ visibily, hideModal }) {
  const [selectedcountryOption, setSelectedcountryOption] = useState({
    value: "Q159",
  });
  const [selectAreaOptions, setSelectAreaOptions] = useState({
    name: "Воро",
    countryId: "Q159",
    regionCode: "VOR",
  });
  const [selectedCitiOption, setSelectedCitiOption] = useState(null);

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
            regionCode: el.isoCode,
            name: el.name,
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
          });
        });
      });
  }, [selectAreaOptions]);

  return (
    <div>
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
                {/* <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={selectedOption}
                  placeholder="Пол"
                /> */}
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
                {/* <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={selectedOption}
                  placeholder="Статус"
                /> */}
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
