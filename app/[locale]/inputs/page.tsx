'use client'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import './styles.css';
import SecurityCodeForm from './SecurityCode';
import PasswordForm from './PasswordForm';
import LangForm from './LangForm';
import EmailForm from './EmailForm';

export default function InputResearch() {
    const theme = useTheme();
    const [ , setEmailValue] = React.useState("");
    const [ , setPasswordValue] = React.useState("");
    const [otpValue, setOtpValue] = React.useState("");
    const [langValue, setLangValue] = React.useState("en");

    const [activeStep, setActiveStep] = React.useState(0);



    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

   

    /* */
    function handleEmailSubmit(email: string) {
        setEmailValue(email);
        setActiveStep(activeStep + 1);
    }

    function handleRegisterCodeNext(value: string) {
        setOtpValue(value);

        setActiveStep(activeStep + 1);
    }

    function handlePasswordSubmit(password: string) {
        setPasswordValue(password);
        setActiveStep(activeStep + 1);
    }

    function handleLangSubmit(setLangCode: string) {
        console.log("Selected language: ", setLangCode);
        setActiveStep(0);
        setLangValue(setLangCode);
    }

    return (
        <>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '300px',
                width: '100vw',
            }}>

                <MobileStepper
                    variant="progress"
                    steps={4}
                    position="static"
                    activeStep={activeStep}
                    sx={{
                        width: 400,


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
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '200px',
                    width: '400px',
                    border: '1px solid #ccc',
                }}>
                    {activeStep === 0 &&
                        <div>
                            <EmailForm onEmailSubmit={handleEmailSubmit}/>
                        </div>}
                    {activeStep === 1 &&
                        <div>
                            <p>Enter your security code</p>
                            <SecurityCodeForm securityCode={otpValue} setSecurityCode={handleRegisterCodeNext} />
                        </div>
                    }
                    {activeStep === 2 &&
                        <div>
                            <p>Step 2: Enter your password</p>
                            <PasswordForm onPasswordSubmit={handlePasswordSubmit} />
                        </div>
                    }
                    {
                        activeStep === 3 &&
                        <div>
                            <p>Step 3: Select your language</p>
                            <LangForm onLangSubmit={handleLangSubmit} langCode={langValue} />
                        </div>
                    }

                </div>

            </div>


        </>
    );
}



/*

<button className="btn btn-blue" >Toggle Error</button>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '300px',
                border: '1px solid #ccc',
                paddingTop: '20px',
            }}>

                <Box component="form" onSubmit={submitForm} noValidate style={{ display: "flex", flexDirection: "column", gap: "20px", width: "300px" }}>

                    <FormControl variant="outlined" error={isEmailError}>
                        <InputLabel htmlFor="outlined-email"
                            variant="filled"
                            className={isEmailError ? "text-fld-2-input-lbl-error" : "text-fld-2-input-lbl"}
                        >Email</InputLabel>
                        <OutlinedInput
                            className="text-fld-2"
                            id="outlined-email"
                            required={true}
                            type="email"
                            error={isEmailError}
                            value={emailValue}
                            onChange={(event) => {
                                setEmailValue(event.target.value);
                                setIsEmailError(false);
                            }}

                        // endAdornment={

                        // }
                        // error={isError}
                        />
                        {isEmailError && <div className="text-fld-2-helper-text">Invalid email address</div>}


                    </FormControl>

                    <FormControl variant="outlined" error={isPasswordError}>
                        <InputLabel htmlFor="outlined-adornment-password"
                            variant="filled"
                            className={isPasswordError ? "text-fld-2-input-lbl-error" : "text-fld-2-input-lbl"}
                        >Password</InputLabel>
                        <OutlinedInput
                            className="text-fld-2"
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            required={true}
                            value={passwordValue}
                            onChange={(event) => {
                                setPasswordValue(event.target.value);
                                setIsPasswordError(false);
                            }}
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
                            error={isPasswordError}
                        />
                        {isPasswordError && <div className="text-fld-2-helper-text">Incorrect password</div>}

                    </FormControl>

                    <FormControl variant="outlined" error={isOtpError}>
                        <InputLabel htmlFor="outlined-otp" variant='filled' className={isOtpError ? "text-fld-2-input-lbl-error" : "text-fld-2-input-lbl"}></InputLabel>
                        <div id="outlined-otp">

                            <OtpInput inputStyle="otp-input-style"
                                containerStyle="otp-container-style"

                                skipDefaultStyles={true}
                                placeholder="----"
                                value={otpValue}
                                onChange={setOtpValue}
                                numInputs={4}
                                renderSeparator={<span></span>}
                                renderInput={(props: any) => <input {...props} style={{ border: "0px", textAlign: 'center' }} />}
                            />
                            {isOtpError && <div className="text-fld-2-helper-text">Incorrect OTP</div>}
                        </div>
                    </FormControl>



                    <button type="submit" >
                        Submit
                    </button>
                </Box>
                <div>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderInput={(props, index) => (
                            <input
                                {...props}
                                style={{
                                    width: '3rem',
                                    height: '3rem',
                                    margin: index === 2 ? '0 1rem 0 0.5rem' : '0 0.5rem', // Add space after 3rd
                                    fontSize: '2rem',
                                    borderRadius: '4px',
                                    border: index < 3
                                        ? '0px solid blue'    // First group
                                        : '0px solid purple', // Second group
                                }}
                            />
                        )}
                    />
                </div>
            </div>

*/