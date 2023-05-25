
import React, { useState } from "react";
import {style} from './style.css'

function App() {
  const [showButtons, setShowButtons] = useState(false);

  const handleClick = () => {
    setShowButtons(true);
  };

  const handleGoBack = () => {
    setShowButtons(false);
  };

  return (
    <>
      <div className="logo">
        <div className="logotip">
          <p>LOGO</p>
        </div>
      </div>
      <div className="body">
        {showButtons ? (
          <>
            <button className="button" onClick={handleGoBack}>
              Назад
            </button>
            <p className="button-link" onClick={() => alert("Статьи")}>
              Статьи
            </p>
            <p className="button-link" onClick={() => alert("Тесты")}>
              Тесты
            </p>
            <p className="button-link" onClick={() => alert("Игры")}>
              Игры
            </p>
          </>
        ) : (
          <>
            <p className="linkWrap" onClick={handleClick}>
              <a href="#" className="link">Статьи</a>
            </p>
            <p className="linkWrap" onClick={handleClick}>
              <a href="#" className="link">Тесты</a>
            </p>
            <p className="linkWrap" onClick={handleClick}>
              <a href="#" className="link">Игры</a>
            </p>
          </>
        )}
      </div>
      <div className="footer">
        <p className="footer-text">BANNER</p>
      </div>
    </>
  );
}

export default App;