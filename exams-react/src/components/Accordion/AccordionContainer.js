import React from 'react';
import AccordionItem from "./AccordionItem";
import axios from 'axios';

export default class AccordionContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            examData: props.exams,
            academicYear: props.academicYear,
            semester: props.semester,
            studyYear: props.studyYear,
            faculty: props.faculty,
            seats: props.seats,
            course: props.course,
            teacher: props.teacher,
            date: props.date,
            id: props.id
        };
    }
    handleDeleteExam = (id) => {
        console.log("Delete");
        let del = window.confirm("Are you sure you want to delete this exam?");
        if(del){
            this.setState( prevState => {
                return {
                    examData: prevState.examData.filter(p => p.id !== id)
                };
            });
            axios.delete('localhost:3000', this.state.id)
                .then(res => {
                    console.log(this.state.id+"was deleted");
                })
                .catch(res => {
                    console.log(res.error);
                });
            console.log("Exam was deleted successfully");
        }
        else {
            console.log("Exam wasn't deleted");
        }

    }
    render() {
        return (

            <div className="accordion-container">
                <header>
                    <h1>Exams</h1>
                </header>

                {this.state.examData.map( exam =>
                    <AccordionItem key={exam.id}
                         academicYear={exam.academicYear}
                         semester={exam.semester}
                         studyYear={exam.studyYear}
                         faculty={exam.faculty}
                         seats={exam.seats}
                         course={exam.course}
                         teacher={exam.teacher}
                         date={exam.date}
                         id={exam.id}
                         deleteExam={this.handleDeleteExam}
                         exam={exam}
                         expanded={false}
                    />
                )}

                {(this.state.examData.length === 0) ? <p>There are no exams at the moment</p> : null}
            </div>

        );
    }
}