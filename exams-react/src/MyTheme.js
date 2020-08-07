import React, {useState, useRef} from 'react';
import './App.css';
import {useOnClickOutside} from './hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import './components/Accordion/accordion.css';


function MyTheme() {

    const [open, setOpen] = useState(false);
    const node= useRef();
    const menuId="main-menu";


    useOnClickOutside(node, () => setOpen(false));

    return (
        <div>

            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles />
                    <div ref={node}>
                        <FocusLock disabled={!open}>
                            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                            <Menu open={open} setOpen={setOpen} id={menuId} />
                        </FocusLock>
                    </div>
                </>
            </ThemeProvider>

        </div>
    );
}

export default MyTheme;