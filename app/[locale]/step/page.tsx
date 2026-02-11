'use client'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Avatar } from '@mui/material';
import avatarBoy from '@/public/avatar.png';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

export default function ProgressMobileStepper() {
    const theme = useTheme();
    const [isError, setIsError] = React.useState(false);
      const [showPassword, setShowPassword] = React.useState(false);

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

      const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  function showError() {
    setIsError(!isError);
  }

    return (
        <>
            <span>Step {activeStep + 1} of 4</span>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '300px',
                border: '1px solid #ccc',
            }}>


                <MobileStepper
                    variant="progress"
                    steps={4}
                    position="static"
                    activeStep={activeStep}
                    sx={{ width: 400,


                        '& .MuiLinearProgress-bar': {
                        backgroundColor: 'red',
                    },
                    '& .MuiLinearProgress-root': {
                        backgroundColor: '#cfcfcf',
                        borderRadius: '2px',
                    }
                     }}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
                <div style={{ width: "300px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
                    {activeStep === 0 && <div>
                        Start your journey here! This is the first step of the process. Follow the instructions to complete each step and move forward.
                    </div>}
                    {activeStep === 1 &&
                        <div>
                            <Avatar src={avatarBoy.src}


                                alt="Avatar" sx={{ width: 100, height: 100, border: "1px solid #1f1f1f" }} />
                        </div>}
                    {activeStep === 2 &&
                        <div>
                            <FormControl sx={{ m: 1, width: '25ch', borderColor: '#cfcfcf' }} variant="outlined">
                                <InputLabel style={{color: isError ? 'red' : '#cfcfcf'}} htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={
                                                    showPassword ? 'hide the password' : 'display the password'
                                                }
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                onMouseUp={handleMouseUpPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password!"
                                    error={isError}
                                />
                                <FormHelperText error={isError} style={{color: "red"}}>{isError ? "Incorrect password" : ""}</FormHelperText>
                                
                            </FormControl>

                            <FormControl sx={{ m: 1, width: '25ch', borderColor: '#cfcfcf' }} variant="outlined">
                                <InputLabel style={{color: isError ? 'red' : '#cfcfcf'}} htmlFor="outlined-adornment-email">email</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-email"
                                    type="email"
                                    
                                    label="email"
                                    error={isError}
                                />
                                <FormHelperText error={isError} style={{color: "red"}}>{isError ? "Incorrect email" : ""}</FormHelperText>
                                
                            </FormControl>
                        </div>}
                    {activeStep === 3 && <div>Content for Step 4</div>}
                </div>
                <div>
                    <button onClick={showError}>Show Error</button>
                </div>
            </div>
        </>
    );
}
