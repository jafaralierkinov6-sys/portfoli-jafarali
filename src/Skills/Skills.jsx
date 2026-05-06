
import "./Skills.css"
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiReactrouter } from "react-icons/si"
import { useTranslation } from "react-i18next"
import "../index.css"

function Skills() {
  const { t } = useTranslation()

  const skills = [
    { icon: <FaHtml5 />, name: "HTML", level: 90 },
    { icon: <FaCss3Alt />, name: "CSS", level: 85 },
    { icon: <FaJs />, name: "JavaScript", level: 80 },
    { icon: <FaReact />, name: "React", level: 70 },
    { icon: <SiTailwindcss />, name: "Tailwind", level: 75 },
    { icon: <SiReactrouter />, name: "Router", level: 55 },
  ];

  return (
    <section className="skills-section">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon-wrapper">{skill.icon}</div>
            <span>{skill.name}</span>
            <div className="neon-line"></div>
          </div>
        ))}
      </div>

      <h2>{t("Skill")}</h2>

      <div className="progress-grid">
        {skills.map((skill, index) => {
          const radius = 50;
          const stroke = 10;
          const normalizedRadius = radius - stroke / 2;
          const circumference = 2 * Math.PI * normalizedRadius;
          const offset = circumference - (skill.level / 100) * circumference;

          return (
            <div className="progress-ring" key={index}>
              <svg width="120" height="120">
                <circle cx="60"  cy="60" r={normalizedRadius} stroke="#1b2638" strokeWidth={stroke} fill="none"/>
                <circle  cx="60"  cy="60"r={normalizedRadius} stroke="url(#grad)" strokeWidth={stroke} fill="none" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="ring-progress"/>
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="100%" stopColor="#00ffd0" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="progress-text">{skill.level}%</div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Skills
