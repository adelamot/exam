import axios from "axios";

// const adress = "https://88c2579e-33b7-449f-9315-0fb6dcfb4cb6.mock.pstmn.io";
// const endpoint = "/examList"
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
