import {Link} from "react-scroll"




const Navlinks  = () => {

 
return <div className ="flex flex-col " > 

<Link to="home" 
      spy={true} 
      smooth={true} 
      offset={20} 
      duration={500} 
      className="flex  items-center h-10  pl-20 text-sm font-bold cursor-pointer text-gray-500 hover:text-white"
      >
      HOME
        
      </Link>
      

 <Link to="about" 
      spy={true} 
      smooth={true} 
      offset={0} 
        className="flex  items-center h-10  pl-20 text-sm font-bold cursor-pointer text-gray-500 hover:text-white"
      duration={500} >ABOUT
 </Link>

  <Link to="services" 
      spy={true} 
      smooth={true} 
      offset={0} 
       className="flex  items-center h-10  pl-20 text-sm font-bold cursor-pointer text-gray-500 hover:text-white"
      duration={500} >  SERVICES
  </Link>

  <Link to="projects" 
      spy={true} 
      smooth={true} 
      offset={0} 
       className="flex  items-center h-10  pl-20 text-sm font-bold cursor-pointer text-gray-500 hover:text-white"
      duration={600} >  PROJECTS
  </Link>

  <Link to="contact" 
      spy={true} 
      smooth={true} 
      offset={10} 
       className="flex  items-center h-10  pl-20 text-sm font-bold cursor-pointer text-gray-500 hover:text-white"
      duration={600} >  CONTACT
  </Link>




</div>

}

export default Navlinks; 