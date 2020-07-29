import React, {useState, useRef} from 'react';
import './App.css';
import {useOnClickOutside} from './hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import './components/Accordion/accordion.css';
import AccordionContainer from "./components/Accordion/AccordionContainer";

const ex = [
  {
    "academicYear": "2019-2020",
    "semester": 2,
    "studyYear": 2,
    "faculty": "Computer science",
    "seats": 200,
    "course": "Programming in Java",
    "teacher": "Raul Robu",
    "date": "05/02/2020",
    "id": 4
  },
  {
    "academicYear": "2018-2019",
    "semester": 1,
    "studyYear": 1,
    "faculty": "Computer Science",
    "seats": 123,
    "course": "Data structures and algorithms",
    "teacher": "Dorina Petrica",
    "date": "17/9/2020",
    "id": 6
  },
  {
    "academicYear": "2018-2019",
    "semester": 1,
    "studyYear": 1,
    "faculty": "Computer Science",
    "seats": 123,
    "course": "C programming",
    "teacher": "Mihaela Vida",
    "date": "20/10/2020",
    "id": 7
  }
]
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
            <AccordionContainer
                academicYear={ex.academicYear}
                semester={ex.semester}
                studyYear={ex.studyYear}
                faculty={ex.faculty}
                seats={ex.seats}
                course={ex.course}
                teacher={ex.teacher}
                date={ex.date}
                id={ex.id}
                exams={ex}
            />
          </div>
        </>
      </ThemeProvider>
  );
}

export default App;