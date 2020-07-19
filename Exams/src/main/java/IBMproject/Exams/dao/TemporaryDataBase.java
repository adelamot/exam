package IBMproject.Exams.dao;

import IBMproject.Exams.model.Exam;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@Repository("temporaryDataBase") //marks a class that directly accesses the database
public class TemporaryDataBase implements ExamDao {

    private static List<Exam> Db = new ArrayList<>();

    //we store the exams into an arrayList for now
    //later we will add the actual database
    @Override
    public int insertExam(UUID id, Exam exam) {
        Db.add(new Exam(id,exam.getAcademic_year(),exam.getSemester(),exam.getYear(),
                exam.getFaculty(),exam.getSeats(),exam.getCourse(),exam.getTeacher()));
        return 1;
    }

    @Override
    public List<Exam> selectAllExams(){
        return Db;
    }

}
