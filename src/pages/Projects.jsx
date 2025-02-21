import image2 from "../images/gricstop1.png"
import image3 from "../images/Screenshot 2024-10-05 at 20.18.25.png"
import image4 from "../images/portfolio.png"
import image5 from "../images/form application.png"
import {motion} from "framer-motion"

const Projects = () => {

  return <section id="projects" className="h-screen w-full gap-8 flex-col flex bg-black ">
    <div className="w-full flex justify-center">
      <div className="text-white text-2xl pt-2 ">PROJECTS</div>
    </div>
    <div className="text-white w-full flex justify-center">All</div>
    <div className="h-full w-full gap-4 flex justify-center   ">
    <motion.div
     initial={{opacity:0, }}
     whileInView={{opacity:1}}
     transition={{duration:4}} className="flex justify-center w-3/4 p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
        <div className="border h-[400px] w-full " style={{background:"#15191E"}}>
        <img className="h-2/3 w-full  p-3 object-contain " src={image2} alt="" />
        <div className="flex-col flex  text white w-full gap-1 ">
        <div className="text-white  font-bold pt-2  pl-1">GRICSTOP</div>
        <div className="text-white pl-1 text-sm ">Gric Stop is a popular fast food restaurant in Bosnia and Herzegovina, specializing in delicious doners.</div>
        </div>
        <div className=" w-full flex pt-3  gap-3 pl-2 pb-2  ">
          <div className="w-24 h-8  rounded-xl  border border-gray-500 justify-center flex items-center text-gray-300 " >React.js</div>
          <div className="w-24 h-8  rounded-xl  border justify-center border-gray-500 flex items-center text-gray-300 " >Tailwind</div>
          
          
        </div>
       
        </div>
        <div className="border h-[400px]" style={{background:"#15191E"}}>
        <img className="h-2/3 w-full p-3 " src={image3} alt="" />
        <div className="flex-col flex  text white  w-full gap-1">
        <div className="text-white  font-bold pt-2 pl-1">TOYSTORE</div>
        <div className="text-white pl-1 text-sm">Gric Stop is a popular fast food restaurant in Bosnia and Herzegovina, specializing in delicious doners.</div>
        </div>
        <div className=" w-full flex pt-3  gap-3 pl-2 pr-2">
          <div className="w-24 h-8  rounded-xl  border border-gray-500 justify-center flex items-center text-gray-300 " >React.js</div>
          <div className="w-24 h-8  rounded-xl  border justify-center border-gray-500 flex items-center text-gray-300 " >Tailwind</div>
          <div className="w-24 h-8  rounded-xl  border border-gray-500 justify-center flex items-center text-gray-300 " >Express.js</div>
          <div className="w-24 h-8  rounded-xl  border justify-center border-gray-500 flex items-center text-gray-300 " >MongoDB</div>
          <div className="w-24 h-8  rounded-xl  border justify-center border-gray-500 flex items-center text-gray-300 " >Node.js</div>
          
        </div>
        </div>
        <div className="border h-[400px]  " style={{background:"#15191E"}}>
        <img className="h-2/3 w-full p-3" src={image4} alt="" />
        <div className="flex-col flex  text white w-full gap-1">
        <div className="text-white  font-bold pt-2  pl-1">PORTFOLIO</div>
        <div className="text-white pl-1  text-sm">Gric Stop is a popular fast food restaurant in Bosnia and Herzegovina, specializing in delicious doners.</div>
        </div>
        <div className=" w-full flex pt-3 gap-3 pl-2 pr-2">
          <div className="w-24 h-8  rounded-xl  border border-gray-500 justify-center flex items-center text-gray-300 " >React.js</div>
          <div className="w-24 h-8  rounded-xl  border justify-center border-gray-500 flex items-center text-gray-300 " >Tailwind</div>
          <div className="w-24 h-8  rounded-xl  border border-gray-500 justify-center flex items-center text-gray-300 " >Express.js</div>
          <div className="w-24 h-8  rounded-xl  border justify-center border-gray-500 flex items-center text-gray-300 " >Node.js</div>
          
        </div>
        </div>
        <div className="border h-[400px] " style={{background:"#15191E"}}>
        <img className="h-2/3 w-full p-3" src={image5} alt="" />
        <div className="flex-col flex  text white  w-full gap-2">
        <div className="text-white  font-bold pt-2  pl-1">APPLICATION</div>
        <div className="text-white pl-1 text-sm ">Gric Stop is a popular fast food restaurant in Bosnia and Herzegovina, specializing in delicious doners.</div>
        </div>
        <div className=" w-full flex pt-3 gap-3 pl-2 pr-2">
          <div className="w-24 h-8  rounded-xl  border border-gray-500 justify-center flex items-center text-gray-300 " >React.js</div>
          <div className="w-24 h-8  rounded-xl  border justify-center border-gray-500 flex items-center text-gray-300 " >Tailwind</div>
          <div className="w-24 h-8  rounded-xl  border border-gray-500 justify-center flex items-center text-gray-300 " >Express.js</div>
          <div className="w-24 h-8  rounded-xl  border justify-center border-gray-500 flex items-center text-gray-300 " >Node.js</div>
          <div className="w-24 h-8  rounded-xl  border justify-center border-gray-500 flex items-center text-gray-300 " >MongoDB</div>
          </div>
          
        </div>
      
       
        
        

      </div>
    </motion.div>
    </div>

  </section>
}



export default Projects;