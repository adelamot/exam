package IBMExams.Exam.Controller;

import IBMExams.Exam.Entity.Exam;
import IBMExams.Exam.Service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//
//Class used for mapping requests
//


@RestController
@RequestMapping("api/exams")
public class ExamController {

    @Autowired
    private ExamService examService;

    @CrossOrigin(origins="http://localhost:3000")
    @GetMapping
    public ResponseEntity<List<Exam>> getAllExams(){ return ResponseEntity.ok().body(this.examService.getAllExams()); }


    @CrossOrigin(origins="http://localhost:3000")
    @GetMapping("/{id}")
    public ResponseEntity<Exam> getExamsById(@PathVariable (value = "id") long examId){
        return ResponseEntity.ok().body(this.examService.getExamsById(examId));
    }

    @CrossOrigin(origins="http://localhost:3000")
    @PostMapping
    public ResponseEntity<Exam> createExam(@RequestBody Exam exam){
        return ResponseEntity.ok().body(this.examService.createExam(exam));
    }

    @CrossOrigin(origins="http://localhost:3000")
    @PutMapping("/{id}")
    public ResponseEntity<Exam> updateExam(@RequestBody Exam exam, @PathVariable ("id") long examId){
        exam.setId(examId);
        return ResponseEntity.ok().body(this.examService.updateExam(exam,examId));
    }

    @CrossOrigin(origins="http://localhost:3000")
    @DeleteMapping("/{id}")
    public HttpStatus deleteExam(@PathVariable ("id") long examId){
        this.examService.deleteExam(examId);
        return HttpStatus.OK;
    }

    @CrossOrigin(origins="http://localhost:3000")
    @GetMapping("/{sort}/{by}/{faculty}")
    public ResponseEntity<List<Exam>> getExamByFaculty(  @PathVariable ("faculty")String examFaculty){
        return ResponseEntity.ok().body(this.examService.getExamByFaculty(examFaculty));
    }

    @CrossOrigin(origins="http://localhost:3000")
    @GetMapping("/{sort}/{year}")
    public ResponseEntity<List<Exam>> getExamByYear(  @PathVariable ("year")int examYear){
        return ResponseEntity.ok().body(this.examService.getExamByYear(examYear));
    }

    @CrossOrigin(origins="http://localhost:3000")
    @GetMapping("/{sort}/{by}/{faculty}/{year}")
    public ResponseEntity<List<Exam>> getExamBy_Faculty_Year(@PathVariable ("faculty") String faculty, @PathVariable ("year")int examYear){
        return ResponseEntity.ok().body(this.examService.getExamBy_Faculty_Year(faculty,examYear));
    }

}

