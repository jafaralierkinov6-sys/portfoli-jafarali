import { Link } from 'react-router-dom'; // ✅ to‘g‘ri import shu!
import './Projects.css';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    { key: 'calculator', bgClass: 'calculator-bg', link: '/calculator' },
    { key: 'todo', bgClass: 'todo-bg', link: '/todo' },
    { key: 'films', bgClass: 'films-bg', link: '/films' },
    { key: 'yemak', bgClass: 'yemak-bg', link: '/yemak' },
    { key: 'github', bgClass: 'github-bg', link: '/github' }, // faqat GitHub shu yo‘lga olib boradi
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <Link
          key={index} to={project.link} // ✅ har biri o‘z linkiga o‘tadi
 className={`project-card ${project.bgClass}`}
        >
          <div className={`project-image ${project.bgClass}`}></div>
          <h3 className="project-title">{t(`projects_title_${project.key}`)}</h3>
          <p className="project-description">
            {t(`projects_description_${project.key}`)}
          </p>
        </Link>
      ))}
    </div>
  );
}
