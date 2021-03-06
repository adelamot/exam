import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './accordion.css';
import SaveIcon from '@material-ui/icons/Save'
import AccordionActions from '@material-ui/core/AccordionActions';
import {updateExam} from "../../services";
import Swal from "sweetalert2";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default class ActionsInAccordionSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            inputError: false,
            prevState: null,
            deleteExam: this.props.handleDeleteExam,
            id: this.props.id,
            academic_year: this.props.academic_year,
            semester: this.props.semester,
            year: this.props.year,
            faculty: this.props.faculty,
            seats: this.props.seats,
            course: this.props.course,
            teacher: this.props.teacher,
            date: this.props.date,
            time: this.props.time
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    updateCallback = (response) => {
        if (response.status !== 200) {
            Swal.fire({text: "Exam wasn't updated"});
            this.cancelHandler();
        }
        else {
            this.setState({examData: response.data, exams: response.data});
        }
    }

    saveHandler = () => {

        this.setState({editMode: false});
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

        updateExam(this.updateCallback, newExam);
    }

    cancelHandler = () => {
        this.setState(this.state.prevState);
    }

    editExam = () => {
        this.setState({prevState: this.state});
        this.setState({editMode: true});
    }

    render() {
        return (

            <Accordion className="accordion-item">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<IconButton onClick={() => this.props.deleteExam(this.state.id)} aria-label="delete">
                            <DeleteIcon id="delete-icon"/></IconButton>}
                    />
                    <label>{this.state.course}</label>
                </AccordionSummary>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.saveHandler}
                    onError={errors => console.log(errors)}
                >
                    <AccordionDetails>

                        <Typography color="textSecondary" component={'span'}>

                            {this.state.editMode ? <TextValidator className="examsDataFirst"
                                                                  label="Course"
                                                                  name="course"
                                                                  value={this.state.course}
                                                                  onChange={this.changeHandler}
                                                                  disabled={!(this.state.editMode)}
                                                                  validators={['required']}
                                                                  errorMessages={['this field is required']}
                            /> : null}
                            <div className="flex-container">
                                <div className="container1">
                                    <TextValidator className="examsData"
                                                   label="Faculty"
                                                   name="faculty"
                                                   value={this.state.faculty}
                                                   onChange={this.changeHandler}
                                                   disabled={!(this.state.editMode)}
                                                   validators={['required']}
                                                   errorMessages={['this field is required']}
                                    />
                                    <TextValidator className="examsData"
                                                   label="Teacher"
                                                   name="teacher"
                                                   value={this.state.teacher}
                                                   onChange={this.changeHandler}
                                                   disabled={!(this.state.editMode)}
                                                   validators={['required']}
                                                   errorMessages={['this field is required']}
                                    />

                                    <TextValidator className="examsData"
                                                   label="Date"
                                                   name="date"
                                                   value={this.state.date}
                                                   onChange={this.changeHandler}
                                                   disabled={!(this.state.editMode)}
                                                   validators={['required']}
                                                   errorMessages={['this field is required']}
                                    />
                                    <TextValidator className="examsData"
                                                   label="Time"
                                                   name="time"
                                                   value={this.state.time}
                                                   onChange={this.changeHandler}
                                                   disabled={!(this.state.editMode)}
                                                   validators={['required']}
                                                   errorMessages={['this field is required']}
                                    />
                                </div>
                                <div className="container2">
                                    <TextValidator className="examsData"
                                                   label="Session/Semester"
                                                   name="semester"
                                                   value={this.state.semester}
                                                   onChange={this.changeHandler}
                                                   disabled={!(this.state.editMode)}
                                                   validators={['required']}
                                                   errorMessages={['this field is required']}
                                    />
                                    <TextValidator className="examsData"
                                                   label="Year of study"
                                                   name="year"
                                                   value={this.state.year}
                                                   onChange={this.changeHandler}
                                                   disabled={!(this.state.editMode)}
                                                   validators={['required']}
                                                   errorMessages={['this field is required']}
                                    />
                                    <TextValidator className="examsData"
                                                   label="Academic Year"
                                                   name="academic_year"
                                                   value={this.state.academic_year}
                                                   onChange={this.changeHandler}
                                                   disabled={!(this.state.editMode)}
                                                   validators={['required']}
                                                   errorMessages={['this field is required']}
                                    />
                                    <TextValidator className="examsData"
                                                   label="Number of seats"
                                                   name="seats"
                                                   value={this.state.seats}
                                                   onChange={this.changeHandler}
                                                   disabled={!(this.state.editMode)}
                                                   validators={['required']}
                                                   errorMessages={['this field is required']}
                                    />
                                </div>
                            </div>
                        </Typography>

                    </AccordionDetails>

                    <AccordionActions>
                        {this.state.editMode ?
                            <Button id="cancel-button"
                                    variant="outlined"
                                    size="small"
                                    color="primary"
                                    onClick={this.cancelHandler}>
                                Cancel
                            </Button> : null}
                        {this.state.editMode ? null : <Button id="edit-button"
                                                              variant="outlined"
                                                              size="small"
                                                              color="primary"
                                                              onClick={this.editExam}>
                            Edit
                        </Button>}
                        {this.state.editMode ? <IconButton className="save-button"
                                                           aria-label="save"
                                                           type="submit">
                            <SaveIcon id="save-icon"/>
                        </IconButton> : null}
                    </AccordionActions>
                </ValidatorForm>
            </Accordion>

        );
    }
}