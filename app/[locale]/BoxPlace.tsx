import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function EditableBoxWithPlaceholder() {
    const [isEmpty, setIsEmpty] = useState(true);
    const ref = useRef(null);

    const handleInput = () => {
        if (!ref.current) {
            return;
        }
        setIsEmpty(ref.current.textContent.trim().length === 0);
    };

    return (
        <div>
            <Box
                style={{ border: '1px solid red' }}
                sx={{
                    minWidth: "300px",
                    maxWidth: "600px",
                    position: 'relative',
                    width: 'fit-content',
                    borderColor: 'grey.300',
        
                    minHeight: 40,
                    padding: 1,
                    outline: 'none',
                    alignItems: 'center',
                    '&:focus-within': {
                        borderColor: 'primary.main',
                        boxShadow: (theme) => `0 0 0 2px ${theme.palette.primary.light}`,
                    },
                    
                        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.04), 0px 4px 12px rgba(0, 0, 0, 0.06)",
                        borderRadius: "20px",
                        alignSelf: "stretch"
                }}
            >
                {isEmpty && (
                    <span
                        style={{
                            position: 'absolute',
                            left: 12,
                            top: '20px',
                            transform: 'translateY(-50%)',
                            color: '#aaa',
                            pointerEvents: 'none',
                            userSelect: 'none',
                            fontFamily: 'inherit',
                            fontSize: 'inherit',
                        }}
                        aria-hidden="true"
                    >
                        Type here...
                    </span>
                )}
                <div
                    ref={ref}
                    contentEditable
                    suppressContentEditableWarning
                    spellCheck={false}
                    onInput={handleInput}
                    style={{
                        border: "1px dashed #cfcfcf",
                        outline: 'none',
                        background: 'transparent',
                        minHeight: 36,
                        paddingBottom: "40px",
                        minWidth: '300px',
                        zIndex: 1
                    }}
                    aria-label="Editable text area"
                >

                </div>
                <Button
                    variant="contained"
                    size="small"
                    style={{
                        position: "absolute",
                        right: 8,
                        left: "auto",
                        bottom: 8,
                        zIndex: 1,
                        pointerEvents: "auto" // Clickable over textarea
                    }}
                >
                    Send
                </Button>
            </Box>

        </div>
    );
}

export default EditableBoxWithPlaceholder;