import OtpInput from 'react-otp-input';
import React from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

export default function PasswordForm({onPasswordSubmit}: {onPasswordSubmit?: (password: string) => void}) {
    const [isPasswordError, setIsPasswordError] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [passwordValue, setPasswordValue] = React.useState("");


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (passwordValue.length === 0 ){
            setIsPasswordError(true);
            return
        }

        onPasswordSubmit?.(passwordValue);
    }

    return (
        <Box component="form"
            onSubmit={onSubmit}
            noValidate style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>

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
                                onMouseDown={(e) => e.preventDefault()}
                                onMouseUp={(e) => e.preventDefault()}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    error={isPasswordError}
                />
                {isPasswordError && <div className="text-fld-2-helper-text">Incorrect password</div>}
                <button type="submit">
                    OK
                </button>
            </FormControl>
        </Box>
    )
}