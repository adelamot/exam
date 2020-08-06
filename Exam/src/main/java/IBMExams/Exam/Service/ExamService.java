package IBMExams.Exam.Service;

import IBMExams.Exam.Entity.Exam;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ExamService {

     List<Exam> getAllExams();

     Exam getExamsById( long examId);

     Exam createExam(Exam exam);

     Exam updateExam(Exam exam,  long examId);

    void deleteExam (long examId);

}

