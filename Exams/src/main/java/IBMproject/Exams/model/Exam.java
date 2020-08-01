package IBMproject.Exams.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.util.UUID;

//A model class for the informations about the exams
public class Exam {
    private final UUID id;
    @NotBlank
    private String academic_year;
    @Min(1)
    private int semester;
    @Min(1)
    private int year;
    @NotBlank
    private String faculty;
    @Min(0)
    private int seats;
    @NotBlank
    private String course;
    @NotBlank
    private String teacher;

    //i can chose to not expose my atributes name to the client using JsonProperty .
    public Exam(@JsonProperty("id") UUID id, @JsonProperty("academic_year") String academic_year,
                @JsonProperty("semester")int semester, @JsonProperty("year")int year,
                @JsonProperty("faculty")String faculty, @JsonProperty("seats")int seats,
                @JsonProperty("course")String course, @JsonProperty("teacher")String teacher) {
        this.id = id;
        this.academic_year = academic_year;
        this.semester = semester;
        this.year = year;
        this.faculty = faculty;
        this.seats = seats;
        this.course = course;
        this.teacher = teacher;
    }

    public UUID getId() {
        return id;
    }

    public String getAcademic_year() {
        return academic_year;
    }

    public int getSemester() {
        return semester;
    }

    public int getYear() {
        return year;
    }

    public String getFaculty() {
        return faculty;
    }

    public int getSeats() {
        return seats;
    }

    public String getCourse() {
        return course;
    }

    public String getTeacher() {
        return teacher;
    }
}
