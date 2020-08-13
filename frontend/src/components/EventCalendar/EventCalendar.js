import React from 'react'
import "@fullcalendar/daygrid/main.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {getExamList} from '../../services';
import "./eventcalendar.css";

let even = [];
export class EventCalendar extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoaded: false,
            isDone: false,
            exams: [],
            events: []
        };
    }

    examList = response => {
        if (response.status === 200) {
            this.setState({
                ...this.state,
                exams: response.data,
                isLoaded: true
            });
            response.data.map(e => {
               return  even.push({"title": e.course, "date": e.date});
            });
            this.setState({events: even, isLoaded: true});
        }
    }

    componentDidMount() {
        getExamList(this.examList);
    }

    render() {
        return (
            <div className="container">
                <div className="row-title">
                    <div className="col-sm-12 btn btn-info">
                        <span role="img" aria-label="books">📚</span> Scheduled Exams <span aria-label="books" role="img">📚</span>
                    </div>
                </div>
                <div className="calendar">
                    {this.state.isLoaded ? <FullCalendar
                        plugins={[dayGridPlugin]}
                        events={this.state.events}
                    /> : null}
                </div>
            </div>
        )
    }
}

export default EventCalendar;