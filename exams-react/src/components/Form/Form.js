import React from "react";
import TextField from "@material-ui/core/TextField";
import './form.css';
import Button from "@material-ui/core/Button";
import {addExam} from "../../services.js";
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
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    submitCallback = (response,data) => {
        if(response.status === 200)
            console.log(data);
        else
            console.log("error");
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
            "date": this.state.date
        }
        addExam(this.submitCallback, newExam);
    }

    render() {
        return (
            <div id="addForm" className="addForm">
                <form action="#" method="post">
                    <div>
                        <TextField className="examData"
                                   label="Faculty"
                                   name="faculty"
                                   value={this.state.faculty}
                                   onChange={this.changeHandler}
                                   margin="normal"
                                   variant="standard"
                                   required={true}
                        />
                        <TextField className="examData"
                                   label="Teacher"
                                   name="teacher"
                                   value={this.state.teacher}
                                   onChange={this.changeHandler}
                                   margin="normal"
                                   variant="standard"
                                   required={true}
                        />
                        <TextField className="examData"
                                   label="Course"
                                   name="course"
                                   value={this.state.course}
                                   onChange={this.changeHandler}
                                   margin="normal"
                                   variant="standard"
                                   required={true}
                        />
                        <TextField className="examData"
                                   label="Date"
                                   name="date"
                                   value={this.state.date}
                                   onChange={this.changeHandler}
                                   margin="normal"
                                   variant="standard"
                                   required={true}
                        />

                        <TextField className="examData"
                                   label="Session/Semester"
                                   name="semester"
                                   value={this.state.semester}
                                   onChange={this.changeHandler}
                                   margin="normal"
                                   variant="standard"
                                   required={true}
                        />
                        <TextField className="examData"
                                   label="Year of study"
                                   name="year"
                                   value={this.state.year}
                                   onChange={this.changeHandler}
                                   margin="normal"
                                   variant="standard"
                                   required={true}
                        />
                        <TextField className="examData"
                                   label="Academic Year"
                                   name="academic_year"
                                   value={this.state.academic_year}
                                   onChange={this.changeHandler}
                                   margin="normal"
                                   variant="standard"
                                   required={true}
                        />
                        <TextField className="examData"
                                   label="Number of seats"
                                   name="seats"
                                   value={this.state.seats}
                                   onChange={this.changeHandler}
                                   margin="normal"
                                   variant="standard"
                                   required={true}
                        />
                    </div>
                    <div id="btn-div">
                        <Button id="add-button"
                                onClick={this.submitHandler}
                                variant="outlined"
                                size="large"
                                color="primary"
                                >
                            Add exam
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}