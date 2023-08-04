import { AppBar, Box, Drawer, IconButton, SvgIcon, Toolbar, Tooltip, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { GitHub, LinkedIn} from "@mui/icons-material"
import IconWorld from "../svg/Web"
import NavList from "./NavList"
import { useState } from "react"

const links = {
    LinkedIn: "https://www.linkedin.com/in/josephmena97/",
    Git: "https://github.com/JosephMen",
    MyPage: "https://frander-cv.netlify.app/"
}

export default function Bar() {
    const [navListOpen, setNavListOpen] = useState(false)
    
    return <>
        <AppBar position="static">
            <Toolbar>
                <IconButton 
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx = {{mr: 2, display: {xs:"flex", sm:"none"}}}
                onClick={() => setNavListOpen(true)}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" component="div" sx={{mr: "auto"}}>
                    Joseph Mena
                </Typography>
                <Box sx={{display:{xs: "none", sm: "block"}}}>
                    <Tooltip title="My GitHub">
                        <IconButton color="inherit" component="a" href={links.Git} target="_blank">
                            <GitHub fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="My LinkedIn">
                        <IconButton color="inherit" component="a" href={links.LinkedIn} target="_blank">
                            <LinkedIn fontSize="large"/>
                        </IconButton>
                    </Tooltip>
                    
                    <Tooltip title="My Page">
                        <IconButton color="inherit" component="a" href={links.MyPage} target="_blank">
                            <SvgIcon sx = {{fontSize: 27}}> 
                                <IconWorld />
                            </SvgIcon>
                        </IconButton>
                    </Tooltip>
                </Box>
                

            </Toolbar>
        </AppBar>
        <Drawer 
        open={navListOpen} 
        anchor="left" 
        onClose={() => setNavListOpen(false)}
        sx={{display: {xs: "flex", sm:"none"}}}
        >
            <NavList cerrar={setNavListOpen}></NavList>
        </Drawer>
    </>
}