import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Menu, SvgIcon } from "@mui/material";
import IconWorld from "../svg/Web";
import MenuIcon from '@mui/icons-material/Menu'


const links = {
    LinkedIn: "https://www.linkedin.com/in/josephmena97/",
    Git: "https://github.com/JosephMen",
    MyPage: "https://frander-cv.netlify.app/"
}

export default function NavList(props) {
    
    const {cerrar} = props
    return( 
    <Box sx={{width:"250px"}}>
        <nav>
            <List>
                <ListItemButton onClick={() => cerrar(false)}>
                    <ListItemIcon>
                        <MenuIcon />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton LinkComponent="a" href={links.Git} target="_blank">
                    <ListItemIcon>
                        <GitHub />
                    </ListItemIcon>
                    <ListItemText primary="GitHub" />
                </ListItemButton>
                <ListItemButton LinkComponent="a" href={links.LinkedIn} target="_blank">
                    <ListItemIcon>
                        <LinkedIn />
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn" />
                </ListItemButton>
                <ListItemButton LinkComponent="a" href={links.MyPage} target="_blank">
                    <ListItemIcon>
                        <SvgIcon sx = {{fontSize: 27}}> 
                            <IconWorld />
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary="My Web" />
                </ListItemButton>
            </List>
        </nav>
    </Box>
    )   
}
