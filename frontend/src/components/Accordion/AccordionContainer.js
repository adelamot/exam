import React from 'react';
import AccordionItem from "./AccordionItem";
import {deleteExam, getExamList} from "../../services";
import Swal from "sweetalert2";
import LinearProgress from "@material-ui/core/LinearProgress";
import './accordion.css';

export default class AccordionContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            examData: [],
            isLoaded: false,
        };
    }

    examList = (response) => {
        if(response.status === 200){
            this.setState({
                ...this.state,
                examData: response.data,
                isLoaded: true
             });
        }
        else
            console.log("raspuns server = "+ response);
    }

    componentDidMount() {
        getExamList(this.examList);
    }

    deleteCallback = (id, response) => {
        if (response.status === 200) {
            this.setState(prevState => {
                return {
                    examData: prevState.examData.filter(e => e.id !== id)
                };
            });
            Swal.fire(
                'Deleted!',
                'Your exam has been deleted.',
                'success'
            );
        }
        else {
            Swal.fire(
                'Not deleted!',
                'Your exam has not been deleted!',
                'error'
            );
        }
    }

    handleDeleteExam = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#00b4d8',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                deleteExam(this.deleteCallback, id);
            }
        });
    }

    render() {
        return (

            <div className="accordion-container">

                <header>
                    <h1>Exams</h1>
                </header>
                <div className="myDiv">
                    {/*if the array of exams is loaded we test to see if we have exams in the array.*/}
                    {/*if we have exams in the array we iterate over it and make an AccordionItem for each exam*/}
                    {this.state.isLoaded ? this.state.examData.length ? (this.state.examData.map(exam =>

                        <AccordionItem key={exam.id}
                                       academic_year={exam.academic_year}
                                       semester={exam.semester}
                                       year={exam.year}
                                       faculty={exam.faculty}
                                       seats={exam.seats}
                                       course={exam.course}
                                       teacher={exam.teacher}
                                       date={exam.date}
                                       time={exam.time}
                                       id={exam.id}
                                       deleteExam={this.handleDeleteExam}
                                       exam={exam}
                                       expanded={false}
                        />
                    )) : <p>There are no exams at the moment </p> : (<div><LinearProgress/></div>)}
                </div>
            </div>

        );
    }
}