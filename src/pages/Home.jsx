import img1 from "../images/bez pozadine.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Other from "./Other";
import Navlinks from "../components/Nav";
import {Link} from "react-scroll"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import MuiDrawer from "../components/Slidemodal";
import { useState } from "react";




const handleClick = (url) => {
  console.log(url);
  window.location.href = url;
}



const DownloadButton =()=> {
  const link = document.createElement("a");
  link.href="images/Anel Zeric Resume.pdf" ;
  link.download="resume.pdf";
  link.click();
}



const Home = () => {

  const [openmodal , setopenmodal] = useState("")


  return  <>
  <section id=""  className="h-screen w-full  bg-black text-white  flex  ">
    <div  className=" hidden w-1/6 h-full border-r  border-gray-400 flex-col xl:flex  "  >
   <h1 className="text-white text-5xl h-1/6 w-full flex pl-20 pt-14   ">Anel</h1>
   <div className="h-1/2 w-full flex-col gap-6 pt-8" >
  <Navlinks/>
   </div>
   <div className="h-1/3 w-full flex-col text-white pt-28">
   <div className="flex  space-x-4 h-10 pl-16 text-xs  text-gray-500 hover:text-white ">Phone :
    <div > +38762837881</div>
   </div>
   <div className="flex  h-10 space-x-4 pl-16  text-xs  text-gray-500 hover:text-white ">Email: 
   <div  > anel_z86@hotmail.com</div>
   </div>
   
  
   </div>
    </div>
    <div className="h-full flex w-full text-white ">
      <div className="lg:w-44 lg:flex hidden flex-col h-full ">
      <div className="flex h-full w-full justify-end items-end ">
        <div className="flex-col h-1/3  w-full gap-4">
        <div className= "w-full flex  h-16 text-xl justify-center ">  
           <div className=" justify-center flex  bg-gray-400 " style={{width:"1px" , height:"40px "}}></div>
         
        </div>
       
        <div className=" lg:h-12 w-full flex justify-center cursor-pointer md:h-8">
        <InstagramIcon className=" hover:text-white text-gray-500"   fontSize="medium" ></InstagramIcon>
        </div>
        <div className="lg:h-12 w-full flex justify-center cursor-pointer md:h-8">
        <LinkedInIcon onClick={()=> handleClick("https://www.linkedin.com/feed/")} className=" hover:text-white text-gray-500"   fontSize="medium"></LinkedInIcon>
        </div>
        <div className="lg:h-12 w-full flex justify-center cursor-pointer md:h-8">
        <GitHubIcon onClick={()=> handleClick("https://github.com/anelz?tab=repositories")} className=" hover:text-white text-gray-500"    fontSize="medium"></GitHubIcon>
        </div>
        </div>
      </div>

      </div>
  <div className="lg:w-1/3 h-full flex flex-col  w-1/3">
    <div className="h-full w-full flex flex-col text-white gap-4 items-center justify-center p-2 lg:p-0 "> 
      <h1 className="lg:text-4xl w-full flex lg:justify-end   lg:pr-20   pr-4 md:text-3xl xl:text-5xl text-xl ">Anel Žerić</h1> 
      <div className="lg:text-xl w-full flex justify-end pr-2  xl:text-2xl text-md ">Fronted Developer-React.js</div> 
      <div className="flex justify-end  lg:pr-28  w-full  ">
        <div onClick={DownloadButton} className="flex border-lg border lg:h-10  lg:w-32 h-12 w-36 text-sm  justify-center items-center rounded-xl cursor-pointer  text-gray-500 hover:text-white border-gray-500">Download CV</div>
      </div>
    </div>
  </div>

      <div className="lg:w-2/3 h-screen w-5/6  ">
      <div className="w-full h-12 lg:hidden justify-end flex text-white items-end pr-4 ">
      <MenuIcon onClick={()=> setopenmodal(true)} fontSize="large"/>
      </div>
      <div className="h-full w-full flex  items-center">
      <img className="lg:h-5/6 lg:pt-12  lg:p-10  brightness-75 h-2/5 object-cover " src={img1} alt="" srcset="" />
      </div>
      
      </div>
    </div>
    <div className=" flex justify-end h-screen items-end">
      <div className="flex flex-col">
    <Link to="about" 
      spy={true} 
      smooth={true} 
      offset={10} 
       className="animate-pulse cursor-pointer hidden xl:flex"
      duration={600} >  Scroll down
  </Link>
    
        <div clasname= "flex w-full">
          <div className=" pl-4 animate-pulse hidden xl:flex">
            <KeyboardDoubleArrowDownIcon fontSize="small"/>

          </div>
          </div>
        
      </div>
    </div>
    <MuiDrawer open={openmodal} close={()=> setopenmodal(false)}/>
  </section>
  <About/>
  <Services/>
  <Projects/>
  <Contact/>
  <Other/>
  
 
  </>
  
}



export default Home;