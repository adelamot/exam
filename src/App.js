import React, {useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar'
import {useOnClickOutside} from './hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import {Img} from 'react-image';
import { render } from '@testing-library/react';
import raft from './assets/raft.jpg';

function App() {

  const [open, setOpen] = useState(false);
  const node= useRef();
  const menuId="main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (

    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        <div>
          <img src={require('./assets/raft1.png')} alt='raft' style={{ width: 1536, height:826}}/>
        </div>
      </>
      </ThemeProvider>
  );
}

export default App;