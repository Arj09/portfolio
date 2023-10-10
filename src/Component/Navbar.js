import react from 'react'
import {AppBar, Box, InputBase, Stack, Typography}  from '@mui/material'
export const Navbar = ()=>{
    return(
        <AppBar sx={{position:"relative",width:"100vw", height:"80px", backgroundColor:"blue", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:"10px 50px", color:"white"}}>
            <Typography  variant='h4'>MernStack</Typography>
            <Stack   direction={'row'} sx={{display: { xs: 'none', sm: 'block' }}}>
                <InputBase placeholder='Search' sx={{color:"white" , border:"2px solid white", padding:"5px 10px", borderRadius:"7px"}}/>
            </Stack>
        </AppBar>
    )
}