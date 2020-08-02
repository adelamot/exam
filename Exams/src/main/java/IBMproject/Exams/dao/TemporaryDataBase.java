package IBMproject.Exams.dao;

import IBMproject.Exams.model.Exam;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Repository("temporaryDataBase") //marks a class that directly accesses the database
public abstract class  TemporaryDataBase implements ExamDao {

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

    //search in database if we have a person with the specific id
    /*
    @Override
    public Optional<Exam> selectExamById(UUID id) {
        return Db.stream()
                .filter(exam->exam.getId().equals(id))
                .findFirst();
    }


    @Override
    public int deleteExamById(UUID id) {
        Optional<Exam> examToDelete = selectExamById(id);
        if(!examToDelete.isPresent())
        {
            return 0;
        }
        Db.remove(examToDelete.get());
        return 1;
    }

    @Override
    public int updateExamById(UUID id, Exam update) {
        return selectExamById(id)
                .map(exam->
                {
                    int indexOfPersonToUpdate = Db.indexOf(exam);
                    if(indexOfPersonToUpdate >=0)
                    {
                        Db.set(indexOfPersonToUpdate,new Exam(id,update.getAcademic_year(),update.getSemester(),update.getYear(),
                                update.getFaculty(),update.getSeats(),update.getCourse(), update.getTeacher()));
                        return 1;
                    }
                    return 0;
                })
                .orElse(0);
    }
    */
}
