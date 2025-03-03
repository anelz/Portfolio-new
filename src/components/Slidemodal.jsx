import {Drawer ,Box, Typography , List, ListItem, ListItemButton, ListItemText, ListItemIcon} from "@mui/material"
import {Link} from "react-scroll"




const  MuiDrawer =({open, close })=>{
 
  return (
   <Drawer  anchor="right" open={open} onClose ={()=> close()}  >
    <Box style={{backgroundColor:"#1a1a1a" , color:"white",}}  p={2} width="250px" height="100%" textAlign="center" role="presentation">
      <Typography  variant="h6" component = "div">
        
        <List >
        <ListItem  >
            <ListItemIcon />
             
              <ListItemButton  onClick={()=> close()}>
                <ListItemText >Home</ListItemText>
                  </ListItemButton>
                  
        </ListItem>
       
        <ListItem>
            <ListItemIcon/>
            <Link to="about" 
            spy={true} 
            smooth={true} 
            offset={0} 
            duration={500} > 
              <ListItemButton onClick={()=> close()}>
                <ListItemText >About me</ListItemText>
        </ListItemButton>
        </Link>
        </ListItem>

         <ListItem>
             <ListItemIcon/>
             <Link to="services" 
             spy={true} 
             smooth={true} 
             offset={0} 
             duration={500} >  
                 <ListItemButton onClick={()=> close()}>
              <ListItemText >Services</ListItemText>
              </ListItemButton>
             </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon/>
              <Link to="projects" 
            spy={true} 
            smooth={true} 
            offset={0} 
            duration={600} > 
              <ListItemButton onClick={()=> close()}>
                <ListItemText >Projects</ListItemText>
            </ListItemButton>
            </Link>
            
        </ListItem>

        <ListItem>
            <ListItemIcon/>
            <Link to="contact" 
            spy={true} 
            smooth={true} 
            offset={10} 
            duration={600} >  
              <ListItemButton onClick={()=> close()}>
                <ListItemText >Contact</ListItemText>
            </ListItemButton>
            </Link>
        </ListItem>
        
        

       </List>
      </Typography>
     
    </Box>
   </Drawer>


  )

  
}



export default MuiDrawer;