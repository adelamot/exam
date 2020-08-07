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
                    {this.state.isLoaded ? this.state.examData.length ? (this.state.examData.map(exam =>

                        <AccordionItem key={exam.id}
                                       academic_year={exam.year}
                                       semester={exam.semester}
                                       year={exam.year}
                                       faculty={exam.faculty}
                                       seats={exam.seats}
                                       course={exam.course}
                                       teacher={exam.teacher}
                                       // date={exam.date}
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