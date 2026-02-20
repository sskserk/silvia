
import React from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



export default function LangForm({ langCode, onLangSubmit }: { langCode?: string, onLangSubmit?: (langCode: string) => void }) {
    const [langValue, setLangValue] = React.useState(langCode || "");

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        onLangSubmit?.(langValue);
    }

    function langSelected(event: SelectChangeEvent) {
        const selectedLang = event.target.value;
        setLangValue(selectedLang);
        console.log("Selected language: ", selectedLang);
    }



    return (
        <Box component="form"
            onSubmit={onSubmit}
            noValidate style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
            <FormControl variant='outlined'>
                <InputLabel htmlFor="lang-select"
                    variant="filled"
                    className={"text-fld-2-input-lbl"}
                >Language</InputLabel>
                <Select id="lang-select"
                    className="text-fld-2-select fld-long"
                    value={langValue}
                    onChange={langSelected}>

                    <MenuItem value={"en"}>English</MenuItem>
                    <MenuItem value={"es"}>Spanish</MenuItem>
                    <MenuItem value={"fr"}>French</MenuItem>
                    <MenuItem value={"de"}>German</MenuItem>
                </Select>
            </FormControl>

            <button type="submit">
                OK
            </button>
        </Box>

    )
}