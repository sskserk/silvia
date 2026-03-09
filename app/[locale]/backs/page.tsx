'use client'
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function SimpleBackdrop() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        //  setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Button onClick={handleOpen}>Show backdrop</Button>
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={open}
                onClick={handleClose}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ mb: 2 }}>
                        Loading...

                    </Typography>
                    <CircularProgress style={{ color: '#00ff00' }} />
                </div>

            </Backdrop>
        </div>
    );
}