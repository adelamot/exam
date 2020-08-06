package IBMExams.Exam.Entity;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "exam")
public class Exam {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long  id;

    @Column (name = "academic_year")
    @NotBlank
    private String academic_year;

    @Column (name = "semester")
    @Min(1)
    private int semester;

    @Column (name = "year")
    @Min(1)
    private int year;

    @Column (name = "faculty")
    @NotBlank
    private String faculty;

    @Column (name = "seats")
    @Min(0)
    private int seats;

    @Column (name = "course")
    @NotBlank
    private String course;

    @Column (name = "teacher")
    @NotBlank
    private String teacher;

    public Exam()
    {

    }

    public Exam(@NotBlank String academic_year, @Min(1) int semester, @Min(1) int year, @NotBlank String faculty,
                @Min(0) int seats, @NotBlank String course, @NotBlank String teacher) {
        this.academic_year = academic_year;
        this.semester = semester;
        this.year = year;
        this.faculty = faculty;
        this.seats = seats;
        this.course = course;
        this.teacher = teacher;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAcademic_year() {
        return academic_year;
    }

    public void setAcademic_year(String academic_year) {
        this.academic_year = academic_year;
    }

    public int getSemester() {
        return semester;
    }

    public void setSemester(int semester) {
        this.semester = semester;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getFaculty() {
        return faculty;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }
}
