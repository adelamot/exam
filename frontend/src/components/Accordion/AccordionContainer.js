import React from 'react';
import AccordionItem from "./AccordionItem";
import {deleteExam, getExamList} from "../../services";
import Swal from "sweetalert2";
import LinearProgress from "@material-ui/core/LinearProgress";
import './accordion.css';
import SearchBox from "../Search/SearchBox";


export default class AccordionContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            examData: [],
            isLoaded: false,
            search: "",
            isSearching: false
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
            console.log(response);
    }

    handleSearchCallback = (response) => {

        if(response.status === 200){
            this.setState({
                ...this.state,
                isSearching: true,
                examData: response.data,
                isLoaded: true
            });
        }
        else
            this.setState({...this.state, isLoaded: true, isSearching: false});
    }

    componentDidMount() {
        getExamList(this.examList);
    }

    deleteCallback = (id, response) => {
        if (response.status === 200) {
            this.setState(
                {examData: this.state.examData.filter(e => e.id !== id)
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

    searchHandler = (value) => {
        this.setState({search: value});
    }

    cancelSearch = () => {
        this.setState({isSearching: false});
        getExamList(this.examList);

    }
    render() {
        return (

            <div className="accordion-container">
                <header>
                    {this.state.isSearching ? <h1>Search results</h1> : <h1>Exams</h1> }
                    <SearchBox cancelSearch={this.cancelSearch} search={this.state.search||''} searchHandler={this.searchHandler} handleSearchCallback={this.handleSearchCallback}/>
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
                        />
                    )) : <p>There are no exams</p> : (<div className="progress-bar"><LinearProgress/></div>)}

                </div>
            </div>

        );
    }
}