package IBMproject.Exams.service;

import IBMproject.Exams.dao.ExamDao;
import IBMproject.Exams.model.Exam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

//class used for changing databases
//we will use dependency injection later to change it

@Service//used on a class that performs services such as executing business logic
public class ExamService {

    private final ExamDao examDao;

    @Autowired// injects object dependency implicitly
    //just finds for you what needs to be injected where, and does that for you.
    public ExamService(@Qualifier("temporaryDataBase") ExamDao examDao) { //Qualifier used to switch between interface implementations
        this.examDao = examDao;
    }

    public int addExam(Exam exam)
    {
        return examDao.insertExam(exam);
    }

    public List<Exam> getAllExams()
    {
        return examDao.selectAllExams();
    }
}
