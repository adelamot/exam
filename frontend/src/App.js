import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import './components/Accordion/accordion.css';
import AccordionContainer from "./components/Accordion/AccordionContainer";
import MyTheme from "./MyTheme";
import Form from "./components/Form/Form";
import "./components/ScrollToTop/ScrollToTop.js";
import {ScrollToTop} from "./components/ScrollToTop/ScrollToTop";
import EventCalendar from "./components/EventCalendar/EventCalendar";

function App() {
  return (
      <Router>
        <div>
            <MyTheme/>
            <ScrollToTop/>
            <Switch>
                <Route exact path = "/" component = {() => <AccordionContainer/>}/>
                <Route path="/addExam" component={() =>  <Form/>} />
                <Route path="/Calendar" component={() => <EventCalendar/>}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;