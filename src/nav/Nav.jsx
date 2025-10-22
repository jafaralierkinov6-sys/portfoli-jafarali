
import "./Nav.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Nav() {
  const { t } = useTranslation()

  return (
    <nav className="navbar">
      <Link to='/AboutMe'>
      <h3 className="logo">Erkinov Jafarali</h3>
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-item">{t("home")}</Link>
        <span className="nav-item">{t("about")}</span>
        <Link to='/projects'>
        <span className="nav-item">{t("projects")}</span>
        </Link>
        <Link to='/skills'>
         <span className="nav-item">{t("skills")}</span>
        </Link>
        <Link to="/contact" className="nav-item">{t("contact")}</Link>
         <Link to="/routine" className="nav-item">{t("routine")}</Link>
           <Link to="/about front end" className="nav-item">{t("front")}</Link>
      </div>
    </nav>
  );
}

