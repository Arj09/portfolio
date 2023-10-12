import react from 'react'
import {AppBar, Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, styled}  from '@mui/material'




const ContainerBox = styled('div')(({theme})=>({
    width:"80%",
    display:"grid",
    margin:"20px auto",
   
    gridTemplateRows:"1fr",
    gridTemplateColumns:"1fr 1fr 1fr 1fr",
    alignItems:"center",
    textAlign:"center",
    gap:"30px",
    padding:"20px",
    backgroundColor:"white",
    justifyContent:"space-between",
    padding:"10px",
    [theme.breakpoints.down('md')]:{
        gridTemplateColumns:"1fr 1fr",

    },
    [theme.breakpoints.down('sm')]:{
        gridTemplateColumns:"1fr",

    }
   
    

}))


const CardBox = styled('div')(({theme})=>({
    border:"0.2px solid blue"
    




}))
export const Main = ()=>{


    let data = [1,2,3,4,5,6,6,3,7]
    
    return(
        <Box  >

            <Typography  variant='h3' sx={{textAlign:"center", paddingTop:"50px", paddingBottom:"20px"}}>Our Work</Typography>
           <ContainerBox>
            {
                data.map((data)=>{
                    return(
                        <CardBox>
                            <img  style={{width:"100%", height:"10%"}}  alt='jindal' src='https://images.pexels.com/photos/16170191/pexels-photo-16170191/free-photo-of-tenerife-las-carboneras.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load://images.pexels.com/photos/11042107/pexels-photo-11042107.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
                            
                            <Box sx={{padding:" 20px"}}>
                                <Typography>MernStack project</Typography>
                                <Typography variant="body2" color="text.secondary"  sx={{paddingBottom:"10px"}}>Gwalior is a city in the central Indian state Gwalior is a city in the central Indian state </Typography>
                                <Typography   sx={{textAlign:"center", color:'white', cursor:"pointer", padding:"10px 20px", backgroundColor:"blue" }}>Link</Typography>
                            </Box>
                </CardBox>
                    )
                })
            }
            

            

            
           


           </ContainerBox>
                

            
        </Box>
       
    )
}