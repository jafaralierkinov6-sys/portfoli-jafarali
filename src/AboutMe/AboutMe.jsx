import './AboutMe.css';
import Img from '../../public/Vite.jpg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className="aboutme-section">
      <div className="aboutme-container">
        <div className="aboutme-text">
          <h2 dangerouslySetInnerHTML={{ __html: t('about_me_greeting') }}></h2>
          <p dangerouslySetInnerHTML={{ __html: t('about_me_paragraph') }}></p>

          <h3>{t('about_me_skills')}</h3>
          <ul>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>Hooks</li>
            <li>React Router</li>
            <li>SCSS & CSS</li>
          </ul>

          <h3>{t('about_me_hobbies')}</h3>
          <ul>
            <li>Veb-dasturlash</li>
            <li>Texnologiyalar bilan shug‘ullanish</li>
            <li>Film ko‘rish</li>
            <li>Kitob o‘qish</li>
          </ul>
         <Link to='/contact'>
          <button className="aboutme-btn">{t('about_me_contact')}</button>
         </Link>
        </div>

        <div className="aboutme-image">
          <img className="Img" src={Img} alt="Profile" />
        </div>
      </div>
    </section>
  );
}
