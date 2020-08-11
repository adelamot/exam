package IBMExams.Exam.Service;

import IBMExams.Exam.Entity.Exam;

import java.util.List;
//
//Interface used for creating the needed functionality
//

public interface ExamService {

     List<Exam> getAllExams();

     Exam getExamsById( long examId);

     Exam createExam(Exam exam);

     Exam updateExam(Exam exam,  long examId);

    void deleteExam (long examId);

    List<Exam> getExamByFaculty(String examFaculty);

    List<Exam> getExamByYear(int examYear);

    List<Exam> getExamBy_Faculty_Year(String examFaculty,int examYear);

}

