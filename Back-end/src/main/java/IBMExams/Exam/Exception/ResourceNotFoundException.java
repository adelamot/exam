package IBMExams.Exam.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
//
//Class used for handling not found exception
//

@ResponseStatus(value = HttpStatus.NOT_FOUND )
public class ResourceNotFoundException extends RuntimeException{


    public ResourceNotFoundException(String message)
    {
        super(message);
    }
}
