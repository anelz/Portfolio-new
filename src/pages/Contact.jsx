import { TextField, Button} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import {motion} from "framer-motion"



const Contact = () => {

  return <section id="contact" className="h-screen w-full gap-5 flex-col bg-black">
    <div className="h-5/6 flex-col gap-5 flex  lg:pt-44 pt-20">
    <div className=" h-3/4  text-3xl text-white   ">
    <div className="h-full w-full flex justify-center items-end ">
    <div className="flex justify-center text-2xl ">CONTACT</div>
    </div>
    <div className="flex justify-center items-center pt-10 text-2xl font-bold"> Get in touch</div>
    </div>
    <div className="h-full pt-20 ">
      <div className="h-full w-full flex justify-center ">
        <div className="lg:w-2/5 w-3/4 h-3/4 flex-col flex pt-20  gap-6">
        <div className="h-20 w-full flex justify-center text-white ">
        <TextField  label="Subject"
  variant="filled"
  sx={{background:"white"}} className="w-full"/>
    
        </div>
        <div className="h-20 w-full flex justify-center text-white  ">
        <TextField  label="Name"
  variant="filled"
  sx={{background:"white"}} className="w-full"/>
    
        </div>
        <div className="h-20 w-full flex justify-center text-white  ">
        <TextField  label="Email"
  variant="filled"
  sx={{background:"white",  }} className="w-full"/>
    
        </div>
        <div className="h-20 w-full flex justify-center text-white ">
        <TextField variant="filled" label ="Message"  
          className="  w-full"
          multiline
          sx={{background:"white" }}
        ></TextField>
        </div>
        <div className="h-20 w-full flex justify-center text-white  ">
      <Button  sx={{background:"black"}} variant="contained" className="w-full hover:text-gray-500 ">Send Message</Button>
        </div>
        
        </div>
      </div>
    </div>
    <motion.div
    initial={{opacity:0, }}
    whileInView={{opacity:1}}
    transition={{duration:3}} className="h-1/3 w-full flex justify-center gap-4  pt-28 bg-black ">
    <div className="container w-full  p-2 lg:p-0">
      <div className="h-24 w-full flex flex-col">
        <div className="flex justify-center w-full">
        <CallIcon  fontSize="large" sx={{color:"white"}}></CallIcon>
        </div>
        <div className="justify-center flex text-white pt-3  lg:text-sm text-xs">+38762837881</div>
      </div>
      <div className="h-24 w-full flex flex-col">
      <div className="flex justify-center w-full">
        <PlaceIcon  fontSize="large" sx={{ color:"white"}}></PlaceIcon>
        </div>
        <div className="justify-center flex text-white pt-3 lg:text-sm text-xs ">Sarajevo</div>
        
      </div>
      <div className="h-24-full flex-col flex">
      <div className="flex justify-center w-full">
        <MailOutlineIcon  fontSize="large" sx={{color:"white"}}></MailOutlineIcon>
        </div>
        <div className="justify-center flex text-white pt-3 lg:text-sm text-xs ">anel_z86@hotmail.com</div>
      </div>
    </div>
 
    </motion.div>
    </div>

  </section>
}



export default Contact;