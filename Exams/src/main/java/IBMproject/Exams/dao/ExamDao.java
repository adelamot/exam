package IBMproject.Exams.dao;


import IBMproject.Exams.model.Exam;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

//define the contract for anyone that wishes to implement the interface
//we can use dependency injection to switch between implementation with 1 line of code
public interface ExamDao {

    //add an exam to the database with a given ID
    int insertExam(UUID id, Exam exam);

    //add an exam without giving the id (the id will be randomly generated)
    default int insertExam(Exam exam)
    {
        UUID id = UUID.randomUUID();
        return insertExam(id,exam);
    }

    List<Exam> selectAllExams();

    //Optional<Exam> selectExamById(UUID Id);
    Exam selectExamById(UUID Id);

    int deleteExamById(UUID id);

    int updateExamById(UUID id, Exam exam);

}
