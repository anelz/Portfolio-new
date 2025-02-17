import { TextField, Button} from "@mui/material";


const Contact = () => {

  return <section className="h-screen w-full gap-5 flex-col bg-black">
    <div className="h-5/6 flex-col gap-5 flex  pt-44">
    <div className=" h-3/4  text-3xl text-white   ">
    <div className="h-full w-full flex justify-center items-end ">
    <div className="flex justify-center  ">CONTACT</div>
    </div>
    <div className="flex justify-center items-center pt-10 text-xl"> Get in touch</div>
    </div>
    <div className="h-full pt-20 ">
      <div className="h-full w-full flex justify-center ">
        <div className="w-2/5 h-3/4 flex-col flex pt-20 ">
        <div className="h-20 w-full flex justify-center text-white ">
        <TextField  label="Name"
  variant="standard"
  color="primary"
  focused className="w-full"/>
    
        </div>
        <div className="h-20 w-full flex justify-center text-white  ">
        <TextField  label="Email"
  variant="standard"
  color="primary"
  focused className="w-full"/>
    
        </div>
        <div className="h-20 w-full flex justify-center text-white ">
        <TextField  label="Message"
  variant="standard"
  color="primary"
  focused className="w-full"/>
        </div>
        <div className="h-12 w-full flex justify-center text-white ">
      <Button color="primary" variant="contained" className="w-full ">Send Message</Button>
        </div>
        
        </div>
      </div>
    </div>
    </div>

  </section>
}



export default Contact;