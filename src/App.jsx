import { BrowserRouter,Routes, Route, } from "react-router-dom";
import { ROUTES } from "./constants";
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/About"
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WelcomeModal from "./components/WelcomeModal";

const  App = () => {
  return (
  <div className="h-screen w-full gap-4 flex-col ">
    <WelcomeModal/>
    <BrowserRouter>
      <Routes>
      <Route path={ROUTES.HOME}  element ={<Home/>}/>
      <Route path={ROUTES.ABOUT}  element ={<About/>}/>
      <Route path={ROUTES.PROJECTS}  element ={<Projects/>}/>
      <Route path={ROUTES.SKILLS}  element ={<Skills/>}/>
      <Route path={ROUTES.CONTACT}  element ={<Contact/>}/>
      <Route path={ROUTES.FALLBACK}  element ={<div className="flex-1 flex justify-center items-center bg-black text-l  text-white ">404 page not found or under development</div>}/>


      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
