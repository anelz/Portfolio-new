import LaptopIcon from '@mui/icons-material/Laptop';
import TerminalIcon from '@mui/icons-material/Terminal';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const Services = () => {

  return <section className="h-screen w-full gap-4 flex-col flex bg-black ">
    <div className="h-1/6 w-full gap-2 ">
    <div className="flex justify-center  text-2xl  text-white pt-20">SERVICES</div>
    </div>
    <div className="w-full gap-2 flex  justify-center text-3xl  text-white ">What i Do</div>
    <div className="h-1/2 w-full  pt-10 flex justify-center " >
    <div className='flex w-4/5 justify-center '>
    <div className="grid2  gap-6  p-4 ">
      <div className="h-full w-full flex flex-col border-gray-400 border icon " >
        <div className="h-1/2 w-full flex justify-center items-end text-white ">
          <LaptopIcon  fontSize='large' style={{ color:"white "}}/>
        </div>
        <h1 className='flex justify-center text-white pt-2'>Frontend</h1>
        <p className=' pl-3 flex justify-center text-white pt-10 text-sm'>Proven ability to build complex web applications using React, Tailwind CSS, and Bootstrap. Skilled in creating custom components, implementing responsive designs, and optimizing for performance. Proficient in HTML5, CSS3, and JavaScript.</p>
      </div>
      <div className="border h-full w-full flex flex-col icon border-gray-400">
      <div className="h-1/2 w-full flex justify-center items-end text-white ">
          <TerminalIcon fontSize='large' style={{ color:"white "}}/>
        </div>
        <div className='flex justify-center text-white pt-2'>Backend</div>
        <p className='pl-3 flex justify-center text-white pt-10 text-sm '>Skilled backend developer with experience in building RESTful APIs using Node.js and Express.js. Proficient in MongoDB for data management and Firebase for user authentication, real-time databases, and scalability. Focused on writing clean, maintainable, and efficient code.</p>
      </div>
      <div className="border h-full w-full flex flex-col icon border-gray-400">
      <div className="h-1/2 w-full flex justify-center items-end text-white ">
          <DesignServicesIcon fontSize='large' style={{ color:"white "}}/>
        </div>
        <div className='flex justify-center text-white pt-2'>Web Design</div>
        <p className=' pl-3 flex justify-center text-white pt-10 text-sm'>Skilled backend developer with experience in building RESTful APIs using Node.js and Express.js. Proficient in MongoDB for data management and Firebase for user authentication, real-time databases, and scalability. Focused on writing clean, maintainable, and efficient code.</p>
      </div>
    </div>
    </div>
    </div>
  
  </section>
  
  }
  
  
  export default Services;