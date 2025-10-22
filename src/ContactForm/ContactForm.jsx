
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import './ContactForm.css'
import emailjs from "emailjs-com"
const SERVICE_ID = "service_8ao46os";     
const TEMPLATE_ID = "template_iihit29";   
const USER_ID = "XqZj6dOPTAFkuYYkx";      

 export default function ContactForm() {
  const { t } = useTranslation()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
      .then((res) => {
        setStatus("Yuborildi!")
      })
      .catch((err) => {
        setStatus("Xato: " + err.text)
      });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
       <h2 className="-translate-y-[10px]">{t("contact")}</h2>
      <div>
        <label>{t("name")}</label>
        <input name="name" value={form.name} onChange={handleChange} required/>
      </div>
      <div>
        <label>{t("email")}</label>
        <input name="email" value={form.email}  onChange={handleChange}  type="email"  required/>
      </div>
      <div>
        <label>{t("message")}</label>
        <textarea  name="message" value={form.message} onChange={handleChange}required/>
      </div>
      <button type="submit">{t("send")}</button>
      <p>{status}</p>
    </form>
  );
}


