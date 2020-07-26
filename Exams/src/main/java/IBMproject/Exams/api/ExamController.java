package IBMproject.Exams.api;

import IBMproject.Exams.model.Exam;
import IBMproject.Exams.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RequestMapping("api/v1/exam")
//class for implementing the needed operations
@RestController//return an object instead of a view, also converts the response to JSON
public class ExamController {

    Optional<String> customMessage;

    private final ExamService examService;

    @Autowired
    public ExamController(ExamService examService) {
        this.examService = examService;
    }

    @PostMapping // handles the post request
    public void addExam(@RequestBody  Exam exam)
    {
        examService.addExam(exam);
    }

    @GetMapping // handles the get request
    public List<Exam> getAllExams()
    {
        return examService.getAllExams();
    }

    @GetMapping(path ="{id}")
    public Exam getExamById(@PathVariable("id") UUID id)
    {
        return examService.getExamById(id)
                .orElse(null);
        // .orElseThrow(() -> new RuntimeException("No exam found with id: " + id) );

    }

    @DeleteMapping(path ="{id}")
    public void deleteExamById(@PathVariable("id")UUID id)
    {
        examService.deleteExam(id);
    }

    @PutMapping(path ="{id}")
    public void updateExam(@PathVariable("id")UUID id , @RequestBody Exam examToUpdate)
    {
        examService.updateExam(id,examToUpdate);
    }
}
