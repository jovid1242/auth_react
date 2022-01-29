import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "../../styles/modal.scss";

export default function Modal(props) {
  return (
    <div className={!props.visibily ? "d_none" : ""}>
      <div className="modal">
        <div className="modal__wrapper">
          <div className="modal_head">
            <p onClick={() => props.hide()}>
              <FontAwesomeIcon icon={faAngleLeft} /> Закрыть
            </p>
            <span>{props.title}</span>
          </div>
          <div className="content">{props.content}</div>
        </div>
      </div>
    </div>
  );
}
