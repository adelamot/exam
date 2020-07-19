package IBMproject.Exams.api;

import IBMproject.Exams.model.Exam;
import IBMproject.Exams.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/exam")
//class for implementing the needed operations
@RestController//return an object instead of a view
public class ExamController {

    private final ExamService examService;

    @Autowired
    public ExamController(ExamService examService) {
        this.examService = examService;
    }

    @PostMapping // post method
    public void addExam(@RequestBody Exam exam)
    {
        examService.addExam(exam);
    }

    @GetMapping // get method
    public List<Exam> getAllExams()
    {
        return examService.getAllExams();
    }
}
