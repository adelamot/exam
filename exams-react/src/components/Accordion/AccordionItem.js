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
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save'
import AccordionActions from '@material-ui/core/AccordionActions';
import {updateExam} from "../../services";
import Swal from "sweetalert2";

export default class ActionsInAccordionSummary extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            disabledInputs: true,
            hiddenInputs: true,
            academicYear: this.props.academicYear,
            semester: this.props.semester,
            studyYear: this.props.studyYear,
            faculty: this.props.faculty,
            seats: this.props.seats,
            course: this.props.course,
            teacher: this.props.teacher,
            date: this.props.date,
            id: this.props.id,
            deleteExam: this.props.handleDeleteExam,
            expanded: this.props.expanded,
            inputError: false
        }
        this.baseState = this.state;
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    updateCallback = (response) => {
        if(response.status === 200)
            Swal.fire({text: response.data});
        else
            Swal.fire({text:"Exam wasn't updated"});
    }
    saveHandler = () => {
            // this.setState({baseState: this.state});
            this.setState({disabledInputs: true, hiddenInputs: true});

            let newExam = {
                "academicYear": this.state.academicYear,
                "semester": this.state.semester,
                "studyYear": this.state.studyYear,
                "faculty": this.state.faculty,
                "seats": this.state.seats,
                "course": this.state.course,
                "teacher": this.state.teacher,
                "date": this.state.date,
                "id": this.state.id
            }

            updateExam(this.updateCallback, newExam);
    }

    cancelHandler = () => {
        this.setState(this.baseState);
        this.setState({disabledInputs: true, hiddenInputs: true});
    }

    editExam = () => {
        let st = [];
        st.concat(this.state);
        this.setState({baseState: st });
        this.setState({disabledInputs: false, hiddenInputs: false});
    }

    render() {
        return (

            <Accordion id="accordion-item">
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
                    <label>{this.state.course + " - " + this.state.date}</label>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography color="textSecondary"  component={'span'}>
                        <TextField className="examData"
                                   label="Faculty"
                                   name="faculty"
                                   value={this.state.faculty}
                                   onChange={this.changeHandler}
                                   disabled={this.state.disabledInputs}
                                   margin="normal"
                                   variant="standard"
                                   error = {this.state.inputError}
                        />
                        <TextField className="examData"
                                   label="Teacher"
                                   name="teacher"
                                   value={this.state.teacher}
                                   onChange={this.changeHandler}
                                   disabled={this.state.disabledInputs}
                                   margin="normal"
                                   variant="standard"
                        />
                        {this.state.hiddenInputs ? null : <TextField className="examData"
                                                                     label="Course"
                                                                     name="course"
                                                                     value={this.state.course}
                                                                     onChange={this.changeHandler}
                                                                     disabled={this.state.disabledInputs}
                                                                     margin="normal"
                                                                     variant="standard"
                        />}
                        {this.state.hiddenInputs ? null : <TextField className="examData"
                                                                     label="Date"
                                                                     name="date"
                                                                     value={this.state.date}
                                                                     onChange={this.changeHandler}
                                                                     disabled={this.state.disabledInputs}
                                                                     margin="normal"
                                                                     variant="standard"
                        />}

                        <TextField className="examData"
                                   label="Session/Semester"
                                   name="semester"
                                   value={this.state.semester}
                                   onChange={this.changeHandler}
                                   disabled={this.state.disabledInputs}
                                   margin="normal"
                                   variant="standard"
                        />
                        <TextField className="examData"
                                   label="Year of study"
                                   name="studyYear"
                                   value={this.state.studyYear}
                                   onChange={this.changeHandler}
                                   disabled={this.state.disabledInputs}
                                   margin="normal"
                                   variant="standard"
                        />
                        <TextField className="examData"
                                   label="Academic Year"
                                   name="academicYear"
                                   value={this.state.academicYear}
                                   onChange={this.changeHandler}
                                   disabled={this.state.disabledInputs}
                                   margin="normal"
                                   variant="standard"
                        />
                        <TextField className="examData"
                                   label="Number of seats"
                                   name="seats"
                                   value={this.state.seats}
                                   onChange={this.changeHandler}
                                   disabled={this.state.disabledInputs}
                                   margin="normal"
                                   variant="standard"
                        />

                    </Typography>
                </AccordionDetails>

                <AccordionActions>
                    {this.state.disabledInputs ? null :
                        <Button id="cancel-button"
                                variant="outlined"
                                size="small"
                                color="primary"
                                onClick={this.cancelHandler.bind(this)}>
                            Cancel
                        </Button>}
                    {this.state.disabledInputs ? <Button id="edit-button"
                                                         variant="outlined"
                                                         size="small"
                                                         color="primary"
                                                         onClick={this.editExam}>
                        Edit
                    </Button> : null }
                    {this.state.disabledInputs ? null :
                        <IconButton className="save-button"
                                aria-label="save"
                                onClick={this.saveHandler.bind(this)}>
                        <SaveIcon id="save-icon"/>
                    </IconButton>}
                </AccordionActions>
            </Accordion>

        );
    }
}
