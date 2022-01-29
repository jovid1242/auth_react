import React from "react";
import "../../styles/confirm.scss";

export default function Confirmation() {
  return (
    <div className="confirm">
      <div className="confirm__wrapper">
        <p className="title">Введите код подтверждения</p>
        <p className="to_mail">Мы отправили письмо на masha@zenina.com</p>
        <form className="form">
          <input type="text" className="code-input" placeholder="0" />
          <input type="text" className="code-input" placeholder="0" />
          <input type="text" className="code-input" placeholder="0" />
          <div className="code">-</div>
          <input type="text" className="code-input" placeholder="0" />
          <input type="text" className="code-input" placeholder="0" />
          <input type="text" className="code-input" placeholder="0" />
        </form>
      </div>
    </div>
  );
}
