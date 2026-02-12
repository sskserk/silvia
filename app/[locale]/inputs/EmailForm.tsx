
import * as React from "react";
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import  { isEmail } from 'validator';


export default function EmailForm({onEmailSubmit}: {onEmailSubmit?: (email: string) => void}) {
    const [emailValue, setEmailValue] = React.useState("");
    const [isEmailError, setIsEmailError] = React.useState(false);

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if ( !isEmail(emailValue)) {
            setIsEmailError(true);
            return
        }

        onEmailSubmit?.(emailValue);
    }

    return (
        <Box component="form"
            onSubmit={onSubmit}
            noValidate style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>

            <FormControl variant="outlined" error={isEmailError}>
                <InputLabel htmlFor="outlined-adornment-email"
                    variant="filled"
                    className={isEmailError ? "text-fld-2-input-lbl-error" : "text-fld-2-input-lbl"}
                >Email</InputLabel>
                <OutlinedInput
                    className={isEmailError ? "text-fld-2-error text-fld-2" : "text-fld-2"}
                    
                    id="outlined-adornment-email"
                    type={"email"}
                    required={true}
                    value={emailValue}
                    onChange={(event) => {
                        setEmailValue(event.target.value);
                        setIsEmailError(false);
                    }}
                />
                {isEmailError && <div className="text-fld-2-helper-text">Please enter a valid email</div>}
                <button type="submit">
                    OK
                </button>
            </FormControl>          
        </Box>
    )
}