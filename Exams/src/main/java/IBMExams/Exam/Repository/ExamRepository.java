package IBMExams.Exam.Repository;

import IBMExams.Exam.Entity.Exam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//
//Interface used for handling the API of CrudRepository
//

@Repository
public interface ExamRepository extends JpaRepository<Exam, Long> {


}
