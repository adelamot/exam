import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import './components/Accordion/accordion.css';
import AccordionContainer from "./components/Accordion/AccordionContainer";
import MyTheme from "./MyTheme";
import Form from "./components/Form/Form";

function App() {

  return (
      <Router>
        <div>
            <MyTheme/>
            {/*<nav id="myNav"> my navbar </nav>*/}
            <Switch>
                <Route exact path = "/" component = {() => <AccordionContainer/>}/>
                <Route path="/addExam" component={() =>  <Form/>} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;