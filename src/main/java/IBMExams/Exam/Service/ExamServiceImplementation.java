package IBMExams.Exam.Service;

import IBMExams.Exam.Entity.Exam;
import IBMExams.Exam.Exception.ResourceNotFoundException;
import IBMExams.Exam.Repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ExamServiceImplementation implements ExamService {

    @Autowired
    private ExamRepository examRepository;

    @Override
    public List<Exam> getAllExams()
    {
        return examRepository.findAll();
    }

    @Override
    public Exam getExamsById( long examId)
    {
        Optional<Exam> existingExam = examRepository.findById(examId);

        if(existingExam.isPresent()) {
            return existingExam.get();
        }else {
            throw new ResourceNotFoundException("Exam not found with id : " + examId);
        }

        /*
        return examRepository.findById(examId).orElseThrow(
                ()-> new ResourceNotFoundException("Exam not found with id: " +examId));

         */
    }

    @Override
    public Exam createExam( Exam exam)
    {
        return examRepository.save(exam);
    }

    @Override
    public Exam updateExam( Exam exam,  long examId)
    {
        Optional<Exam> existingExam = examRepository.findById(exam.getId());

        if(existingExam.isPresent()) {
            Exam examUpdate = existingExam.get();

            examUpdate.setAcademic_year(exam.getAcademic_year());
            examUpdate.setSemester(exam.getSemester());
            examUpdate.setYear(exam.getYear());
            examUpdate.setFaculty(exam.getFaculty());
            examUpdate.setSeats(exam.getSeats());
            examUpdate.setCourse(exam.getCourse());
            examUpdate.setTeacher(exam.getTeacher());

            examRepository.save(examUpdate);

            return examUpdate;
        }else {
            throw new ResourceNotFoundException("Exam not found with id : " + exam.getId());
        }
        /*
        Exam existingExam = this.examRepository.findById(examId)
                .orElseThrow(()-> new ResourceNotFoundException("Exam not found with id: " +examId));

        existingExam.setAcademic_year(exam.getAcademic_year());
        existingExam.setSemester(exam.getSemester());
        existingExam.setYear(exam.getYear());
        existingExam.setFaculty(exam.getFaculty());
        existingExam.setSeats(exam.getSeats());
        existingExam.setCourse(exam.getCourse());
        existingExam.setTeacher(exam.getTeacher());

        return this.examRepository.save(existingExam);

         */
    }

    @Override
    public void deleteExam ( long examId)
    {
        Optional<Exam> existingExam = examRepository.findById(examId);

        if(existingExam.isPresent()) {
            examRepository.delete(existingExam.get());
        }else {
            throw new ResourceNotFoundException("Exam not found with id : " + examId);
        }
        /*
        Exam  existingExam = this.examRepository.findById(examId)
                .orElseThrow(()-> new ResourceNotFoundException("Exam not found with id: " +examId));
        this.examRepository.delete(existingExam);

        return ResponseEntity.ok().build();

         */
    }

}
