import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import LeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { ForkLeft } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
//import SvgIcon from '@mui/icons/material/SvgIcon';




export default function LangMenuDrawer() {
    const [open, setOpen] = React.useState(false);
    // Menu content for both modes
    const menuItems1 = ['Inbox', 'Starred', 'Send email', 'Drafts'];
    const menuItems2 = ['All mail', 'Trash', 'Spam'];


    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    // Drawer for small screens
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <IconButton
                aria-label="close drawer"
                onClick={toggleDrawer(false)}
                sx={{ position: 'absolute', top: 8, left: 8 }}
                
                style={{border:"1px solid #cfcfcf", width:"48px", height:"48px", color:"#000000"}}
            >

                <LeftIcon  />
            </IconButton>
            <List sx={{ mt: 5 }}>
                {menuItems1.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={toggleDrawer(false)}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            
        </Box>
    );

    return (
        <div>
            <ListItemButton onClick={toggleDrawer(true)} >
                <ListItemIcon >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="7.5" />
                        {/* Symmetric longitude lines */}
                        <path d="M12 4.5 C15.5 8.5 15.5 15.5 12 19.5" />
                        <path d="M12 4.5 C8.5 8.5 8.5 15.5 12 19.5" />
                        {/* Latitude lines */}
                        <path d="M5 9.5h14" />
                        <path d="M5 14.5h14" />
                    </svg>
                </ListItemIcon>
            </ListItemButton>


            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}