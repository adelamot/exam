package IBMExams.Exam.Controller;

import IBMExams.Exam.Entity.Exam;
import IBMExams.Exam.Service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/exams")
public class ExamController {

    @Autowired
    private ExamService examService;

    @GetMapping
    public ResponseEntity<List<Exam>> getAllExams(){
        return ResponseEntity.ok().body(this.examService.getAllExams());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Exam> getExamsById(@PathVariable (value = "id") long examId){
        return ResponseEntity.ok().body(this.examService.getExamsById(examId));
    }

    @PostMapping
    public ResponseEntity<Exam> createExam(@RequestBody Exam exam){
        return ResponseEntity.ok().body(this.examService.createExam(exam));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Exam> updateExam(@RequestBody Exam exam, @PathVariable ("id") long examId){
        exam.setId(examId);
        return ResponseEntity.ok().body(this.examService.updateExam(exam,examId));
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteExam(@PathVariable ("id") long examId){
        this.examService.deleteExam(examId);
        return HttpStatus.OK;
    }

}

