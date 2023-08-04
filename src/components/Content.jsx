import {Box, Card, CardContent, CardMedia, Container, Grid, IconButton, SvgIcon, Typography,  } from "@mui/material";
import AppCard from "./AppCard";
import Info from "./Consts";
import MaterialUI from "../svg/MaterialUI";
import React from "../svg/React";
import Vite from "../svg/Vite";
import Footer from "./Footer";
// import '../assets/imgs/todo-list.png'


export default function Content() {

    const info = Info
    return (
        <Container sx={{margin: '15px auto'}} >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Box sx={{display:'flex', flexDirection:'column', gap: 2}}>
                                <Typography variant="h4" >
                                    Hello 👋
                                    Welcome to my portfolio.
                                </Typography>
                                <Typography variant="h5">
                                    I am a computer science graduate programmer,
                                    my skills range from the backend using .NET to 
                                    the frontend with frameworks like React. I possess 
                                    strong analytical skills, I know when I need to ask 
                                    for help and where to look for it.
                                </Typography>
                                <Box>
                                    <Typography variant="subtitle1">
                                        This page was developed with:
                                    </Typography>
                                    <IconButton >
                                        <SvgIcon sx={{display: 'block', height: 50, width: 50}}>
                                            <MaterialUI />
                                        </SvgIcon>
                                    </IconButton>
                                    <IconButton >
                                        <SvgIcon sx={{display: 'block', height: 50, width: 50}}>
                                            <React />
                                        </SvgIcon>
                                    </IconButton>
                                    <IconButton >
                                        <SvgIcon sx={{display: 'block', height: 50, width: 50}}>
                                            <Vite />
                                        </SvgIcon>
                                    </IconButton>
                                </Box>
                                <Typography variant="caption">
                                    Trivia: Most of the time I spend is styling my projects 
                                    (I didn&apos;t study graphic design 😜) 
                                </Typography>
                            </Box>
                        
                        </CardContent>
                        
                    </Card>
                </Grid>
                {info.map((props) => {
                    let {id} = props
                    return <AppCard {...props} key={id} /> 
                })}
                <Footer />
            </Grid>
        </Container>
    )
}