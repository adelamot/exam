import axios from "axios";

const adress = "https://88c2579e-33b7-449f-9315-0fb6dcfb4cb6.mock.pstmn.io";

export const getExamList = (setExamList) => {
    axios
        .put(adress+"/examList")
        .then(response => {
            setExamList(response.data);
        })
        .catch(response => {
            setExamList(response.error);
        });
};

export const deleteExam = (handleDelete, id) => {
    axios.delete(adress+"/removeExam", id)
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
            handleUpdate("Error="+res);
        });
}

