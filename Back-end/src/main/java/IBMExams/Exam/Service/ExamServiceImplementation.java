package IBMExams.Exam.Service;

import IBMExams.Exam.Entity.Exam;
import IBMExams.Exam.Exception.ResourceNotFoundException;
import IBMExams.Exam.Repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;
//
//Class used for implementing the interface
//

//
   //CRUD functions
//
@Service
@Transactional
public class ExamServiceImplementation implements ExamService {

    @Autowired
    private ExamRepository examRepository;

    @Override
    public Exam createExam(Exam exam) {
        return examRepository.save(exam);
    }

    @Override
    public List<Exam> getAllExams() {
        return examRepository.findAll();
    }


    @Override
    public Exam updateExam(Exam exam, long examId) {
        Optional<Exam> existingExam = examRepository.findById(exam.getId());

        if (existingExam.isPresent()) {
            Exam examUpdate = existingExam.get();

            examUpdate.setAcademic_year(exam.getAcademic_year());
            examUpdate.setSemester(exam.getSemester());
            examUpdate.setYear(exam.getYear());
            examUpdate.setFaculty(exam.getFaculty());
            examUpdate.setSeats(exam.getSeats());
            examUpdate.setCourse(exam.getCourse());
            examUpdate.setTeacher(exam.getTeacher());
            examUpdate.setDate(exam.getDate());
            examUpdate.setTime(exam.getTime());

            examRepository.save(examUpdate);

            return examUpdate;
        } else {
            throw new ResourceNotFoundException("Exam not found with id : " + exam.getId());
        }
    }

    @Override
    public void deleteExam(long examId) {
        Optional<Exam> existingExam = examRepository.findById(examId);

        if (existingExam.isPresent()) {
            examRepository.delete(existingExam.get());
        } else {
            throw new ResourceNotFoundException("Exam not found with id : " + examId);
        }

    }
//
    //Query functions
//
    @Override
    public Exam getExamsById(long examId) {
        Optional<Exam> existingExam = examRepository.findById(examId);

        if (existingExam.isPresent()) {
            return existingExam.get();
        } else {
            throw new ResourceNotFoundException("Exam not found with id : " + examId);
        }
    }


    @Override
    public List<Exam> getExamByFaculty(String examFaculty) {
        List<Exam> examsFaculty = examRepository.findAll();
        Iterator<Exam> iter = examsFaculty.iterator();

        while (iter.hasNext()) {
            Exam ex = iter.next();
            String facult = ex.getFaculty();
            if (!facult.equalsIgnoreCase(examFaculty))
                iter.remove();
        }

        if (!examsFaculty.isEmpty()) {
            return examsFaculty;
        } else {
            throw new ResourceNotFoundException("No exams with faculy : " + examFaculty + "found");
        }
    }

    @Override
    public List<Exam> getExamByYear(int examYear) {
        List<Exam> examsYear = examRepository.findAll();
        Iterator<Exam> iter = examsYear.iterator();

        while (iter.hasNext()) {
            Exam ex = iter.next();
            int academicYear = ex.getYear();
            if (academicYear != examYear)
                iter.remove();
        }

        if (!examsYear.isEmpty()) {
            return examsYear;
        } else {
            throw new ResourceNotFoundException("No exams with year : " + examYear + "found");
        }
    }

    @Override
    public List<Exam> getExamBy_Faculty_Year(String examFaculty, int examYear) {
        List<Exam> examStorage = examRepository.findAll();
        Iterator<Exam> iter = examStorage.iterator();

        while (iter.hasNext()) {
            Exam ex = iter.next();
            int academicYear = ex.getYear();
            String facult = ex.getFaculty();
            if (academicYear != examYear || !facult.equalsIgnoreCase(examFaculty))
                iter.remove();
        }

        if (!examStorage.isEmpty()) {
            return examStorage;
        } else {
            throw new ResourceNotFoundException("No exams found");
        }

    }
}
