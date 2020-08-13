import React from "react";
import './form.css';
import Button from "@material-ui/core/Button";
import {addExam} from "../../services.js";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Typography from "@material-ui/core/Typography";
import Swal from "sweetalert2";

export default class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            id: "",
            academic_year: "",
            semester: "",
            year: "",
            faculty: "",
            seats: "",
            course: "",
            teacher: "",
            date: "",
            time: ""
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    submitCallback = (response, data) => {
        if (response.status === 200) {
            Swal.fire(
                'Added!',
                'Your exam was successfully added.',
                'success'
            );
           this.setState({
                id: "",
                academic_year: "",
                semester: "",
                year: "",
                faculty: "",
                seats: "",
                course: "",
                teacher: "",
                date: "",
                time: ""
            });
        }
        else {
            Swal.fire(
                'Not added!',
                'Your exam has not been added!',
                'error'
            );
        }
    }
    submitHandler = () => {
        let newExam = {
            "id": this.state.id,
            "academic_year": this.state.academic_year,
            "semester": this.state.semester,
            "year": this.state.year,
            "faculty": this.state.faculty,
            "seats": this.state.seats,
            "course": this.state.course,
            "teacher": this.state.teacher,
            "date": this.state.date,
            "time": this.state.time
        }
        let ok = true;
        for (let e in this.state)
            if (!this.state[e] && e !== "id")
                ok = false;

        if (ok)
            addExam(this.submitCallback, newExam);
        else
            console.log("not ok");
    }

    render() {
        return (

            <div >
                <h1> Add an exam </h1>
                <ValidatorForm
                    id="addForm"
                    className="addForm"
                    ref="form"
                    onSubmit={this.submitHandler}
                    onError={errors => console.log(errors)}
                >

                    <Typography color="textSecondary" component={'span'}>
                        <TextValidator className="examData"
                                       label="Course"
                                       name="course"
                                       value={this.state.course}
                                       onChange={this.changeHandler}
                                       validators={['required']}
                                       errorMessages={['this field is required']}
                                       variant="standard"
                        />

                        <div id="flex-container">
                            <div id="container1">
                                <TextValidator
                                    className="examData"
                                    label="Faculty"
                                    name="faculty"
                                    value={this.state.faculty}
                                    onChange={this.changeHandler}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />

                                <TextValidator className="examData"
                                               label="Date"
                                               name="date"
                                               placeholder="15/08/2020"
                                               value={this.state.date}
                                               onChange={this.changeHandler}
                                               validators={['required']}
                                               errorMessages={['this field is required']}
                                />

                                <TextValidator className="examData"
                                               label="Session/Semester"
                                               name="semester"
                                               value={this.state.semester}
                                               onChange={this.changeHandler}
                                               validators={['required', 'minNumber:1', 'maxNumber:12']}
                                               errorMessages={['this field is required', 'please enter a number between 1 and 12']}
                                />
                                <TextValidator className="examData"
                                               label="Academic Year"
                                               name="academic_year"
                                               placeholder="2020-2021"
                                               value={this.state.academic_year}
                                               onChange={this.changeHandler}
                                               validators={['required', 'minNumber:2020', 'maxNumber:2030']}
                                               errorMessages={['this field is required', 'incorrect format']}
                                />
                            </div>

                            <div id="container2">
                                <TextValidator className="examData"
                                               label="Teacher"
                                               name="teacher"
                                               value={this.state.teacher}
                                               onChange={this.changeHandler}
                                               validators={['required']}
                                               errorMessages={['this field is required']}
                                />
                                <TextValidator className="examData"
                                               label="Time"
                                               name="time"
                                               placeholder="15:00"
                                               value={this.state.time}
                                               onChange={this.changeHandler}
                                               validators={['required']}
                                               errorMessages={['this field is required']}
                                />
                                <TextValidator className="examData"
                                               label="Year of study"
                                               name="year"
                                               placeholder="1"
                                               value={this.state.year}
                                               onChange={this.changeHandler}
                                               validators={['required', 'minNumber:1', 'maxNumber:6']}
                                               errorMessages={['this field is required', 'please enter a number between 1 and 6']}
                                />

                                <TextValidator className="examData"
                                               label="Number of seats"
                                               name="seats"
                                               value={this.state.seats}
                                               onChange={this.changeHandler}
                                               validators={['required', 'minNumber:10', 'maxNumber:500']}
                                               errorMessages={['this field is required', 'please enter a number between 10 and 500']}
                                />
                            </div>

                        </div>
                    </Typography>

                    <Button id="add-button"
                            variant="outlined"
                            size="large"
                            color="primary"
                            type="submit"
                    >
                        Add exam
                    </Button>
                </ValidatorForm>
            </div>
        );
    }
}