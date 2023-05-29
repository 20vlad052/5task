import React, { useState } from "react"; 
import { style } from "./style.css"; 
 
function App() {  
  const [page, setPage] = useState("");  
  const [content, setContent] = useState("");  
  
  const handlePageClick = (page) => {  
    setPage(page);  
  };  
  
  const handleGoBack = () => {  
    setPage("");  
    setContent(""); 
  };  
  
  const handleContentClick = (text) => {  
    setContent(text);  
  };  
  
  return (  
    <>  
      <div className="logo">  
        <div className="logotip">  
          <p>LOGO</p>  
        </div>  
      </div>  
      <div className="body">  
        {page ? (  
          <>  
            <button className="button" onClick={handleGoBack}>  
              Назад  
            </button>  
            {page === "Статьи" ? (  
              <>  
                <p className="button-link" onClick={() => handleContentClick("Текст статьи 1")}>  
                  Статья 1  
                </p>  
                <p className="button-link" onClick={() => handleContentClick("Текст статьи 2")}>  
                  Статья 2  
                </p>  
                <p className="button-link" onClick={() => handleContentClick("Текст статьи 3")}>  
                  Статья 3  
                </p>  
              </>  
            ) : (  
              ""  
            )}  
            {page === "Тесты" ? (  
              <>  
                <p className="button-link" onClick={() => handleContentClick("Текст теста 1")}>  
                  Тест 1  
                </p>  
                <p className="button-link" onClick={() => handleContentClick("Текст теста 2")}>  
                  Тест 2  
                </p>  
                <p className="button-link" onClick={() => handleContentClick("Текст теста 3")}>  
                  Тест 3  
                </p>  
              </>  
            ) : (  
              ""  
            )}  
            {page === "Игры" ? (  
              <>  
                <p className="button-link" onClick={() => handleContentClick("Текст игры 1")}>
                  Игра 1  
                </p>  
                <p className="button-link" onClick={() => handleContentClick("Текст игры 2")}>
                  Игра 2  
                </p>  
                <p className="button-link" onClick={() => handleContentClick("Текст игры 3")}>
                  Игра 3  
                </p>  
              </>  
            ) : (  
              ""  
            )}  
            {content && ( 
              <p className="content-text">{content}</p>
            )}
          </>  
        ) : (  
          <>  
            <p className="linkWrap" onClick={() => handlePageClick("Статьи")}>  
              <a href="#" className="link">  
                Статьи  
              </a>  
            </p>  
            <p className="linkWrap" onClick={() => handlePageClick("Тесты")}>  
              <a href="#" className="link">  
                Тесты  
              </a>  
            </p>  
            <p className="linkWrap" onClick={() => handlePageClick("Игры")}>  
              <a href="#" className="link">  
                Игры  
              </a>  
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