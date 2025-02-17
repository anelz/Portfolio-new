import img1 from "../images/bez pozadine.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Other from "./Other";





const Home = () => {

  return  <>
  <section  className="h-screen w-full  bg-black text-white  flex border-b ">
    <div  className="w-1/6 h-full  border-r border-gray-400 flex-col flex "  >
   <h1 className="text-white text-5xl h-1/6 w-full flex pl-20 pt-14 font-thin  ">Anel</h1>
   <div className="h-1/2 w-full flex-col gap-6 pt-8" >
   <div className="flex  items-center h-10  pl-20 text-sm font-bold cursor-pointer ">HOME</div>
   <div className="flex  h-10 items-center pl-20  text-sm font-bold cursor-pointer">ABOUT</div>
   <div className="flex  h-10  items-center pl-20 text-sm font-bold cursor-pointer ">SERVICES</div>
   <div className="flex  h-10  items-center pl-20 text-sm font-bold cursor-pointer ">PROJECTS</div>
   <div className="flex  h-10  items-center pl-20 text-sm font-bold  cursor-pointer">CONTACT</div>
   </div>
   <div className="h-1/3 w-full flex-col text-white pt-28">
   <div className="flex  space-x-4 h-10 pl-16 text-xs ">Phone :
    <div > +38762837881</div>
   </div>
   <div className="flex  h-10 space-x-4 pl-16 text-xs ">Email : 
   <div > anel_z86@hotmail.com</div>
   </div>
   <div className="flex  h-10  items-center pl-16 text-xs">Copyright</div>
  
   </div>
    </div>
    <div className="h-full flex w-full text-white ">
      <div className="w-44 flex-col h-full ">
      <div className="flex h-full w-full justify-end items-end ">
        <div className="flex-col h-1/3 w-full gap-4">
        <div className= "w-full flex  h-16 text-xl justify-center ">  
           <div className=" justify-center flex  bg-gray-400 " style={{width:"1px" , height:"40px "}}></div>
         
        </div>
       
        <div className="h-12 w-full flex justify-center cursor-pointer ">
        <InstagramIcon  color="white" fontSize="medium" ></InstagramIcon>
        </div>
        <div className="h-12 w-full flex justify-center cursor-pointer">
        <LinkedInIcon   fontSize="medium"></LinkedInIcon>
        </div>
        <div className="h-12 w-full flex justify-center cursor-pointer">
        <GitHubIcon  fontSize="medium"></GitHubIcon>
        </div>
        </div>
      </div>

      </div>
  <div className="w-1/2 h-full flex flex-col ">
    <div className="h-full w-full flex flex-col text-white gap-4 items-center justify-center  "> 
      <h1 className="text-5xl w-full flex justify-end pr-20 ">Anel Žerić</h1> 
      <div className="text-2xl w-full flex justify-end pr-2">Fronted Developer-React.js</div> 
    </div>
  </div>

      <div className="w-2/3 h-screen  ">
      <div className="h-full w-full flex  items-center">
      <img className="h-5/6 pt-12 p-10  brightness-75" src={img1} alt="" srcset="" />
      </div>
      
      </div>
    </div>
    <div className=" flex justify-end h-screen items-end">
      <div  className="text-sm animate-pulse cursor-pointer  ">Scroll down
        <div clasname= "flex w-full">
          <div className="flex pl-4">V</div>
         
        </div>
      </div>
    </div>
   
  </section>
  <About/>
  <Services/>
  <Projects/>
  <Contact/>
  <Other/>
  
 
  </>
  
}



export default Home;