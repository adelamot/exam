package IBMproject.Exams.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

//A model class for the informations about the exams
public class Exam {
    private final UUID id;
    private String academic_year;
    private int semester;
    private int year;
    private String faculty;
    private int seats;
    private String course;
    private String teacher;

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
