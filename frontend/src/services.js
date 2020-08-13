import axios from "axios";
const endpoint = "/api/exams";
const address ="http://localhost:8080";

//get exams from the server
export const getExamList = (setExamList) => {
    axios.get(address+endpoint)
        .then(response => {
            setExamList(response);
        })
        .catch(response => {
            setExamList(response);
        });
}

//delete an exam
export const deleteExam = (handleDelete, id) => {
    axios.delete(address+endpoint+"/"+id)
        .then(res => {
            handleDelete(id,res);
        })
        .catch(res => {
            handleDelete(id,res);
        });
}

//update exams
export const updateExam = (handleUpdate, data) => {
    axios.put(address+ endpoint+"/"+data.id, data)
        .then(res=> {
            console.log(data.id);
            handleUpdate(res);
        })
        .catch(res=> {
            handleUpdate(res);
        });
}

// add an exam
export const addExam = (handleAdd, data) => {
    axios.post(address+endpoint+data.id,data)
        .then(res=> {
            handleAdd(res,data);
        })
        .catch(res=> {
            handleAdd(res);
        });
}

//get exams by faculty
export const searchByFaculty = (handleSearch, faculty) => {
    axios.get(address+endpoint+"/sort/by/"+faculty)
        .then(res=> {
            handleSearch(res);
        })
        .catch(res=> {
            handleSearch(res);
        })
}

//get exams by date
export const searchByYear = (handleSearch, year) => {
    axios.get(address+endpoint+"/sort/"+year)
        .then(res => {
            handleSearch(res);
        })
        .catch(res=> {
            handleSearch(res);
        })
}