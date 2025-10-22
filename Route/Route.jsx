import ContactForm from '../src/ContactForm/ContactForm.jsx'
import { Route, Routes } from "react-router-dom";
import App from "../src/App/App.jsx";
import Nav from "../src/nav/Nav";
import Skills from "../src/Skills/Skills.jsx";
import About from "../src/About/About.jsx";
import Projects from "../src/Projects/Projects.jsx";
import AboutMe from "../src/AboutMe/AboutMe.jsx";
import NotFound from "../src/NotFound/NotFound.jsx";
import Calculator from '../Calculator/Calculator.jsx';
import DailyRoutine from '../src/DailyRoutine/DailyRoutine.jsx';
import Todos from '../Todo/Todo.jsx';
import GitHub from '../Github/Github.jsx';
import Slider from '../Slider/Slider.jsx';
export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/github' element={
        <>
       
        <GitHub/>
    </>}
    />
      <Route path='/todo' element={<Todos/>}/>
      <Route path="/contact" element={<><App/> <ContactForm /></>}/>
      <Route path="/" element={<><App /><About /></>}/>
      <Route path="/skills" element={<><App/><Skills /></>}/>
        <Route path="/projects" element={<><App/><Projects/></>}/>
          <Route path="/AboutMe" element={<> <App/><AboutMe/></>}/>
          <Route path='/routine' element={
            <>
            <App/>
            <DailyRoutine/>
            </>
            }/>
              <Route path='/calculator' element={
            <>
            <App/>
            <Calculator/>
            </>
            }/>
                <Route path='/about front end' element={
            <>
            <App/>
            <Slider/>
            </>
            }/>
            <Route path="*" element={<><App/><NotFound /></>}/>
    </Routes>
  );
}
