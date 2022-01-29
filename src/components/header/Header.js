import React, { useState } from "react";
import "../../styles/header.scss";

export default function Header() {
  const [activeBtn, setActiveBtn] = useState(false);

  const clickBnt = () => {
    if (activeBtn) {
      setActiveBtn(false);
    } else {
      setActiveBtn(true);
    }
  };
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <div className="logo__section">
            <div className="logo">
              <h3>Logo</h3>
            </div>
            <div className="theme">
              <div className={activeBtn ? "moon active" : "moon "}></div>
              <div className="action__btn" onClick={() => clickBnt()}>
                <div className={activeBtn ? "on" : "of"}></div>
              </div>
              <div className={activeBtn ? "sun" : "sun active"}></div>
            </div>
          </div>
          <div className="user_info">
            <div className="user__logo"></div>
            <div className="user__name">Jovid</div>
          </div>
        </div>
      </header>
    </>
  );
}
