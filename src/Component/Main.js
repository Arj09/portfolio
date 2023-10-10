import react from 'react'
import {AppBar, Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, styled}  from '@mui/material'




const ContainerBox = styled('div')(({theme})=>({
    display:'grid',
    width:"60vw",
    gridTemplateRows:"1fr",
    gridTemplateColumns:"1fr 1fr 1fr",
    margin:"10px auto",
    justifyContent:"center",
    alignItems:"center",
    gap:"10px",
   
    

}))


const CardBox = styled('div')(({theme})=>({
    border:"0.2px solid red"
    




}))
export const Main = ()=>{
    return(
        <Box  sx={{width:"100vw", }}>

            <Typography  variant='h3' sx={{textAlign:"center", paddingTop:"50px", paddingBottom:"20px"}}>Our Work</Typography>
           <ContainerBox>
            <CardBox>
                <img  style={{width:"100%", height:"10%"}}  src='https://images.pexels.com/photos/16170191/pexels-photo-16170191/free-photo-of-tenerife-las-carboneras.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load://images.pexels.com/photos/11042107/pexels-photo-11042107.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
                <Box sx={{padding:"0 20px"}}>
                    <Typography>MernStack project</Typography>
                    <Typography variant="body2" color="text.secondary">Gwalior is a city in the central Indian state Gwalior is a city in the central Indian state </Typography>

                </Box>
            </CardBox>
            <CardBox>
                <Typography>Arjun</Typography>
            </CardBox>
            <CardBox>
                <Typography>Arjun</Typography>
            </CardBox>


           </ContainerBox>
                

            
        </Box>
       
    )
}