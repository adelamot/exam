package IBMproject.Exams.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//i will delete this later - Paul -
@RestController
public class test {

    @RequestMapping("/")
    public String getHelloWorld()
    {
        return "hello";
    }
}
