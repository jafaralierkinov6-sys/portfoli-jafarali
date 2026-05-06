
import Img from '../../public/Vite.jpg'
import './About.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router';
export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>{t('about_greeting')}</h2>
          <p>{t('about_paragraph')}</p>
          <Link to='/projects'>
          <button className="about-btn">{t('about_button')}</button>
          </Link>
        </div>

        <div className="about-image">
          <img className="Img" src={Img} alt="Profile" />
        </div>
      </div>
    </section>
  );
}
