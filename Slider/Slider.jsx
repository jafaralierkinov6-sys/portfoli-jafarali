import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Slider.css";

export default function Slider() {
  const { t } = useTranslation();

  const slides = [
    t("slides.html"),
    t("slides.css"),
    t("slides.js"),
    t("slides.react"),
    t("slides.reactComponents"),
    t("slides.reactProps"),
    t("slides.reactState"),
    t("slides.reactUseEffect"),
    t("slides.reactRouter"),
    t("slides.jsEvents"),
    t("slides.jsDOM"),
    t("slides.cssFlexbox"),
    t("slides.cssGrid"),
    t("slides.reactConditional"),
    t("slides.reactForms")
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider-container">
      <button className="slider-btn prev" onClick={prevSlide}></button>

      <div className="slide">
        <p>{slides[currentSlide]}</p>
      </div>

      <button className="slider-btn next" onClick={nextSlide}></button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
