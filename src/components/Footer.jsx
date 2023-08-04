import { Box, Card, CardContent, CardMedia, Grid, List, ListItem, Paper, Typography } from "@mui/material";

export default function Footer() {
    
    return (
        <Grid item xs={12}>
             <Paper elevation={2}>
                <Card sx={{display: 'flex', flexWrap:'wrap'}}>
                    <CardMedia component='img' 
                    image="https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg?w=2000"
                    height={300}
                    sx={{
                        "&:hover":{
                            filter: "brightness(0.8);",
                            transition: '.3s'
                        }
                    }}
                    />
                    <CardContent>
                        <Typography variant="h5" sx={{fontWeight:500}}>
                            The projects I am currently working on will be uploaded on this page.  To come
                        </Typography>
                        <br />
                        <Typography variant="body1">
                            A theme page to go deeper into CSS animations.
                        </Typography>
                        <br />
                        <Typography variant="body1">
                            An online sales application with Django and React
                        </Typography>
                        <br />
                        <Typography variant="body1">
                            A sales and product management application for a grocery store, with NodeJS Express Backend, 
                            Docker and Postgres with FrontEnd React and Bootstrap.
                        </Typography>
                        <br />
                        <Typography variant="body1">
                            An online sales application with Django and React
                        </Typography>
                        
                    </CardContent>
                </Card>
            </Paper>

            
        </Grid>
    )

}
