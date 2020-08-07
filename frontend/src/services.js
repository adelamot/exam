import axios from "axios";

const adress = "https://88c2579e-33b7-449f-9315-0fb6dcfb4cb6.mock.pstmn.io";
const endpoint = "/examList"
const endpoint2 = "/api/exams";
const address ="http://localhost:8080";

export const getExamList = (setExamList) => {
    axios.get(address+endpoint2)
        .then(response => {
            setExamList(response);
        })
        .catch(response => {
            setExamList(response);
        });
}

export const deleteExam = (handleDelete, id) => {
    axios.delete(adress+"/removeExam")
        .then(res => {
            handleDelete(id,res);
        })
        .catch(res => {
            handleDelete(id,res);
        });
}

export const updateExam = (handleUpdate, data) => {
    axios.put(adress+ "/updateExam", data)
        .then(res=> {
            handleUpdate(res);
        })
        .catch(res=> {
            handleUpdate(res);
        });
}

export const addExam = (handleAdd, data) => {
    axios.post(adress+"/createexam",data)
        .then(res=> {
            handleAdd(res,data);
        })
        .catch(res=> {
            handleAdd(res);
        });
}
