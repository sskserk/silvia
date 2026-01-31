import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '@/public/mathquill.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function CustomScrollButton(props: { direction: 'left' | 'right'; disabled: boolean; [key: string]: any }) {
    const { direction, disabled, ...other } = props;

   
    return (
        <button
            {...other}
            disabled={disabled}
            style={{
                background: 'none',
                border: 'none',
                padding: 0,
                opacity: disabled ? 0.3 : 1,
                cursor: 'pointer'
            }}
            aria-label={direction === 'left' ? "Scroll Tabs Left" : "Scroll Tabs Right"}
        >
            {direction === 'left' ? (
                <span style={{ fontSize: 32, display: 'inline-block', lineHeight: 1 }}>&#8592;</span>
            ) : (
                <span style={{ fontSize: 32, display: 'inline-block', lineHeight: 1 }}>&#8594;</span>
            )}
        </button>
    );
}

function EditableBoxWithPlaceholder() {
    const [isEmpty, setIsEmpty] = useState(true);
    const ref = useRef<HTMLDivElement>(null);

    const [tabValue, setTabValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleInput = () => {
        if (!ref.current) {
            return;
        }
        setIsEmpty(ref.current.textContent.trim().length === 0);
    };

    function addFormula() {
        if (!ref.current) {
            return;
        }

        const problemEditor = ref.current
        if (!problemEditor) return;


        const mqId = 'mathquill_' + new Date().getTime();
        const fieldSpan = document.createElement('span');
        //        fieldSpan.addEventListener('focusin', () => saveFocus(mqId));
        //        fieldSpan.addEventListener('focusout', () => saveFocus(null));
        fieldSpan.setAttribute('contenteditable', 'false');
        //        fieldSpan.subType = "mathquill_wrapper";
        //        fieldSpan.nestedMqId = mqId;


        const MQ = window.MathQuill.getInterface(window.MathQuill.getInterface.MAX);

        const mq = MQ.MathField(fieldSpan, {
            autoSubscriptNumerals: true,
            autoCommands:
                'alpha beta sqrt theta phi pi tau nthroot cbrt prod int ans percent mid square',
            autoParenthesizedFunctions: 'sin cos ln',
            handlers: {
                edit: function () {
                    //    processContentChange();
                },
            },
        });

        mq.latex('\\text{ }')
        mq.id = mqId;
        //elements.current[mqId] = mq;

        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0 && problemEditor.contains(selection.anchorNode)) {
            const range = selection.getRangeAt(0);
            range.collapse(false); // Collapse to end of selection
            range.insertNode(document.createTextNode("\u00A0")); // Add a space after the math element
            range.insertNode(fieldSpan);
            range.insertNode(document.createTextNode("\u00A0")); // Add a space after the math element

            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            problemEditor.appendChild(fieldSpan);
        }
    }

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
                <Button size="small" variant="text" onClick={addFormula}>F(x)</Button>
                <Button
                    variant="contained"
                    size="small"
                    disabled={isEmpty}
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
            <Box sx={{ width: "300px", marginTop: 2, border: '1px solid grey' }}>
                <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    slots={{
                        scrollButtons: CustomScrollButton
                    }}
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                    <Tab label="Item Four" />
                    
                </Tabs>

                <Box sx={{ border: "1px solid blue" }}>
                    <TabPanel value={tabValue} index={0}>Item One</TabPanel>
                    <TabPanel value={tabValue} index={1}>Item Two</TabPanel>
                    <TabPanel value={tabValue} index={2}>Item Three</TabPanel>
                    <TabPanel value={tabValue} index={3}>
                        <Button>Hello</Button>
                    </TabPanel>

                </Box>
            </Box>

        </div>
    );
}

export default EditableBoxWithPlaceholder;