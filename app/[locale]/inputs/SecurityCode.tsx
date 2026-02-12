import OtpInput from 'react-otp-input';
import React from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

export default function SecurityCodeForm({securityCode, setSecurityCode}: {securityCode: string, setSecurityCode: (value: string) => void}) {
    const [securityCodeValue, setSecurityCodeValue] = React.useState(securityCode);
    const [isSecurityCodeError, setIsSecurityCodeError] = React.useState(false);

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (securityCodeValue.length !== 4) {
            setIsSecurityCodeError(true);
            return
        }
        
        setSecurityCode(securityCodeValue);

    }

    function handleChange(value: string) {
        setSecurityCodeValue(value);
        setIsSecurityCodeError(false);
    }

    return (
        <Box component="form" 
                onSubmit={onSubmit} 
                noValidate style={{
                    display:"flex", 
                flexDirection:"column",
                alignItems:"center",
                }}>
            
            <FormControl variant="outlined">
                <OtpInput inputStyle="otp-input-style"
                            containerStyle="otp-container-style"
                            
                            skipDefaultStyles={true}
                            placeholder="----"
                            value={securityCodeValue}
                            onChange={(value) => handleChange(value)}
                            numInputs={4}
                            renderSeparator={<span></span>}
                            renderInput={(props: any) => <input {...props} style={{ border:"0px", borderRadius: "16px", textAlign: 'center' }} />}
                        
                />

                {isSecurityCodeError && <div className="text-fld-2-helper-text">Incorrect security code</div>}
                <button type="submit">
                    OK
                    </button>
                    

            </FormControl>
        </Box>
    )
}