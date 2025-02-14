/* eslint-disable react/prop-types */
import {Link, AppBar, Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Slide, Toolbar, Typography, useScrollTrigger, Divider, Stack } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

import { Link as RouterLink} from "react-router-dom";

import {iconComponents, MOVIE_LISTS, TOP_LISTS } from "../../../constants";
import Search from "../Search";

const Icon =({iconName}) => {
    const IconComponent = iconComponents[iconName];
    return <IconComponent />
}

function Navbar() {
    const [isOpen, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen((prevState) => !prevState);
    };

    const trigger = useScrollTrigger({
        target: window
    });

  return (
        <Slide appear={false} direction="down" in={!trigger}>
        <AppBar>
            <Container maxWidth="lg">
                <Toolbar>
                <IconButton onClick={handleDrawerToggle}>
                    <MenuIcon sx={{color: 'white'}} />
                </IconButton>

                <Drawer open={isOpen} onClose={handleDrawerToggle}>
                    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
                        <List>
                            {TOP_LISTS.map((item) => (
                                <Link key={item.title} component={RouterLink} to={item.url}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                        <ListItemIcon>
                                            <Icon iconName={item.icon}/>
                                        </ListItemIcon>
                                        <ListItemText primary={item.title} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {MOVIE_LISTS.map((item =>(
                            <Link key={item.title} component={RouterLink} to={item.url}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                    <ListItemIcon>
                                        <Icon iconName={item.icon}/>
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            )))}
                        </List>
                    </Box>
                </Drawer>
                <Stack flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
                    <Typography sx={{color: 'white', textDecoration: 'nono'}} variant="h5" component={RouterLink} to="/">
                        Humoflix
                    </Typography>
                    <Search />
                </Stack>
                </Toolbar>
            </Container>
        </AppBar>
        </Slide>
  )
}

export default Navbar

// 6:37:13