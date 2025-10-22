import React from "react";
import "./DailRoutine.css";
import { useTranslation } from "react-i18next";

export default function DailyRoutine() {
  const { t } = useTranslation();

  const routine = [
    { time: "06:00 AM", activity: t("routine.wakeup") },
    { time: "07:30 AM", activity: t("routine.breakfast") },
    { time: "09:00 AM", activity: t("routine.study") },
    { time: "12:30 PM", activity: t("routine.lunch") },
    { time: "13:10 PM", activity: t("routine.go to school") },
    { time: "02:00 PM", activity: t("routine.continue") },
    { time: "05:10 PM", activity: t("routine.end school") },
     {time: "05:30 PM", activity: t("routine.go to it") },
     { time: "06:00 PM", activity: t("routine.go to it") },
    { time: "07:00 PM", activity: t("routine.learn") },
    { time: "08:30 PM", activity: t("routine.go to home") },
    { time: "10:30 PM", activity: t("routine.read") },
    { time: "11:00 PM", activity: t("routine.sleep") },
  ];

  return (
    <section className="routine-section">
      <h1>🕒 {t("routine.title")}</h1>
      <div className="routine-container">
        {routine.map((item, index) => (
          <div key={index} className="routine-card">
            <div className="time">{item.time}</div>
            <div className="activity">{item.activity}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
