import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Nav from "../nav/Nav";

function App() {
  const { t, i18n } = useTranslation();
  // const [darkMode, setDarkMode] = useState(false)
  // const toggleDark = () => setDarkMode(!darkMode)

  // useEffect(() => {
  //   document.body.className = darkMode ? "dark" : "light";
  // }, [darkMode]);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleDark = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <>
      <Nav />
      <div className="top">
        <div className={darkMode ? "dark" : "light"}>
          <header>
            <h1 className="logo">{t("welcome")}</h1>
            <div className="lang-switch">
              <span
                className={`lang ${i18n.language === "uz" ? "active" : ""}`}
                onClick={() => i18n.changeLanguage("uz")}
              >
                UZ
              </span>
              <span
                className={`lang ${i18n.language === "en" ? "active" : ""}`}
                onClick={() => i18n.changeLanguage("en")}
              >
                EN
              </span>
              <span
                className={`lang ${i18n.language === "ru" ? "active" : ""}`}
                onClick={() => i18n.changeLanguage("ru")}
              >
                RU
              </span>
            </div>
            <button onClick={toggleDark}>
              {darkMode ? t("light") : t("dark")}
            </button>
          </header>
        </div>
      </div>
    </>
  );
}

export default App;
