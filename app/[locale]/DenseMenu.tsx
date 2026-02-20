'use client';
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
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import LangMenuDrawer from './LangMenu';
import { Avatar } from '@mui/material';



export default function ResponsiveDrawer() {
    const isWide = useMediaQuery('(min-width:600px)');
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    // Menu content for both modes
    const menuItems1 = ['Inbox', 'Starred', 'Send email', 'Drafts'];
    const menuItems2 = ['All mail', 'Trash', 'Spam'];

    if (isWide) {
        // Horizontal static menu (AppBar-like)
        return (
            <Box sx={{ width: '100%', bgcolor: 'background.paper', borderBottom: '1px solid #eee', display: 'flex', flexDirection: 'row', alignItems: 'center', px: 2, py: 1 }}>
                <List sx={{ display: 'flex', flexDirection: 'row', p: 0, m: 0 }}>
                    {menuItems1.map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ width: 'auto' }}>
                            <ListItemButton sx={{ px: 2 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
                <List sx={{ display: 'flex', flexDirection: 'row', p: 0, m: 0 }}>
                    {menuItems2.map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ width: 'auto' }}>
                            <ListItemButton sx={{ px: 2 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        );
    }

    // Drawer for small screens
    const DrawerList = (
        <Box sx={{ width: 250, position: 'relative' }} role="presentation">
            <IconButton
                aria-label="close drawer"
                onClick={toggleDrawer(false)}
                sx={{ position: 'absolute', top: 8, left: 8 }}
                size="large"
            >
                <CloseIcon />
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
            <Divider />
            <List>
                {menuItems2.map((text, index) => (
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
            <Box>
                <Avatar src="./avatar.png" alt="Avatar" sx={{ border: "1px solid #1f1f1f" }}/>
            </Box>
            <LangMenuDrawer/>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>=</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}