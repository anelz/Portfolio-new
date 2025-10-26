import Circularprogress from "../components/Circularprogress";
import img1 from "../images/bez pozadine.png"


const About = () => {

  return <section id="about" className="h-screen w-full gap-4 flex-col flex pt-5" style={{background:"#15191E"}}>
    <div className="h-1/4 w-full">
    <div className="flex justify-center w-full h-full items-center pt-20">
    <div class="w-44 h-44 rounded-full  ">
      <img className="object-cover w-44 h-44 rounded-full bg-gray-200" src={img1} alt="" />
    </div>
    </div>
    </div>
    <div className="text-white h-1/6 flex flex-col gap-4">
    <div className="lg:pt-4 flex justify-center pt-6">ABOUT ME</div>
    <div
     
       className=" pt-10 flex justify-center lg:text-xl font-bold text-lg ">2  years of experience building the Web</div>
    </div>
    <div className="h-1/6 w-full text-white lg:justify-center flex ">
    <div
     className="flex justify-center  lg:w-1/2 w-full p-3 lg:p-0  ">Hi, I'm Anel, a skilled Frontend Developer specializing in React. I'm passionate about crafting intuitive and visually appealing user interfaces that deliver exceptional user experiences. My technical expertise extends beyond the frontend, encompassing backend development with Node.js and Express.js, and utilizing MongoDB for efficient data storage. This full-stack skill set empowers me to bring innovative ideas to life and deliver comprehensive web applications.</div>
    </div>
    <div className="h-1/4  w-full gap-4 flex justify-center  2xl: pt-6 md:pt-12 ">
    <div className="w-2/3 justify-center flex" >
    <div className="grid1 grid grid-cols-1  ">
      <div className="flex flex-col">
        <div className=" w-full h-full flex justify-center items-center">
   <Circularprogress    percentage={95} />
   
    </div>
    <div className="text-white  justify-center font-bold hidden lg:flex">HTML </div>
    </div>
    <div className="flex flex-col">
    <div className="w-full h-full flex justify-center items-center">
    <Circularprogress  percentage={90} />
    
   
    </div>
    <div className="text-white  justify-center font-bold  hidden lg:flex">CSS</div>
    </div>
    <div className="flex flex-col">
    <div className="w-full h-full flex justify-center items-center">
   
    <Circularprogress percentage={85} />
    </div>
    <div className="text-white  justify-center font-bold  hidden lg:flex">JS</div>
    </div>
    <div className="flex flex-col">
    <div className="w-full h-full flex justify-center items-center">
    <Circularprogress percentage={90} />
    </div>
    <div className="text-white  justify-center font-bold  hidden lg:flex">REACT</div>
    </div> 
    </div>
    </div>
    
    
    </div>


  </section>
}



export default About;