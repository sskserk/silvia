'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';

const icon = (
    <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
        <svg width="100" height="100">
            <Box
                component="polygon"
                points="0,100 50,00, 100,100"
                sx={(theme) => ({
                    fill: theme.palette.common.white,
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                })}
            />
        </svg>
    </Paper>
);




export default function SimpleFade() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (

        <>
            <header>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>

                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                        Welcome to the Flexbox Example!
                    </div>
                </div>
            </header>
            <main>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
                    Some content
                    <Box>
                        <FormControlLabel
                            control={<Switch checked={checked} onChange={handleChange} />}
                            label="Show"
                        />
                        <Box >
                            <Fade in={checked} appear={true} timeout={1000} style={{ display: checked ? 'block' : 'none' }}>{icon}</Fade>
                        </Box>
                    </Box>
                    <Box>
                        <span>Additional content below the fade example.</span>
                    </Box>
                </Box> {/* sx={{ display: checked ? 'block' : 'none' }} */}
                <Box>
                    <span>Additional content below the fade example.</span>
                </Box>


            </main>
            <footer style={{ textAlign: 'center', padding: '1rem', borderTop: '1px solid #ccc' }}>
                Footer content
            </footer>

        </>

    );
}
