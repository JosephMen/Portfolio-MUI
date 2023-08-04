import { GitHub } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Typography } from "@mui/material";
import PropTypes from 'prop-types'

const AppCard = ({param, link, tags, title, git, img}) => {
    return (
        <Grid item xs={12} sm={6} >
            <Card variant="outlined" >
                <CardMedia
                    sx={{height: 140, "&:hover":{
                        filter: "brightness(0.8);",
                        transition: '.3s'
                    }}}
                    image={img}
                />
                <CardContent >
                    <Box sx={{display:'flex', flexDirection:'column', gap: 2}}>
                        <Typography variant="h5" sx={{fontWeight: 500}}>
                            {title}
                        </Typography>
                        <Typography variant="body2">
                            {param}
                        </Typography>
                        <Box sx={{padding: {xs: 0, sm: 0}, display: 'flex', gap:'2px', flexWrap:'wrap'}}>
                            {tags.map((text, index) => {
                                return <Chip key={index} variant="filled" label={text} />
                            })}
                        </Box>
                    </Box>
                </CardContent>
    
                <CardActions  >
                    <Button variant="contained" component="a" href={link} target="_blank">
                        Visit Site
                    </Button>
                    <Button variant="contained" component="a" href={git} target="_blank">
                        <GitHub sx={{mr: 1}}/>
                        Repo
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )  
}

AppCard.propTypes = {
    param: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    git: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}


 export default AppCard