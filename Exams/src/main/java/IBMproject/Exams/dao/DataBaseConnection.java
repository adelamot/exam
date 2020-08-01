package IBMproject.Exams.dao;

import IBMproject.Exams.ExamsApplication;
import IBMproject.Exams.model.Exam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.management.Query;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


    @Repository("database")
    public class DataBaseConnection implements ExamDao{

        private Statement stmt;

        public static Connection conectDataBase() throws Exception {
            try {
                String driver = "com.mysql.cj.jdbc.Driver";
                String url = "jdbc:mysql://127.0.0.1:3306/ibmdb";
                String username = "root";
                String password = "abcd";
                Class.forName(driver);

                Connection conn = DriverManager.getConnection(url, username, password);

                return conn;
            } catch (Exception e) {
                System.out.println(e);
            }
            return null;

        }

        @Override
        public int insertExam(UUID id, Exam exam) {
            try {
                List<Exam> ExamArray = new ArrayList<>();
                stmt = conectDataBase().createStatement();

                String sql = String.format("INSERT INTO exam VALUES('%s','%s','%d','%d','%s','%d','%s','%s')", id,
                        exam.getAcademic_year(),exam.getSemester(),exam.getYear(),exam.getFaculty(),exam.getSeats(),
                        exam.getCourse(),exam.getTeacher());

                int result = stmt.executeUpdate(sql);

                conectDataBase().close();
                return result;

            }catch (Exception e) {
                System.out.println(e);
            }
            return 0; //it was return null
        }

        @Override
        public List<Exam> selectAllExams(){
            try {
                List<Exam> ExamArray = new ArrayList<>();
            stmt = conectDataBase().createStatement();
            ResultSet rs = stmt.executeQuery("select * from ibmdb.exam");

                while(rs.next()) {
                    Exam ex = new Exam(UUID.fromString(rs.getString(1)),rs.getString(2),rs.getInt(3),rs.getInt(4),
                            rs.getString(5),rs.getInt(6),rs.getString(7),rs.getString(8));
                    ExamArray.add(ex);
                }
                conectDataBase().close();
                return ExamArray;
            }catch (Exception e) {
                System.out.println(e);
            }
            return null;
        }

        @Override
        //public Optional<Exam> selectExamById(UUID Id) {
        public Exam selectExamById(UUID Id){

            try {

                stmt = conectDataBase().createStatement();
                ResultSet rs = stmt.executeQuery(" SELECT * FROM ibmdb.exam  WHERE id='"+Id+"'");
                rs.next();
                Exam ex =new Exam(UUID.fromString(rs.getString(1)),rs.getString(2),rs.getInt(3),rs.getInt(4),
                        rs.getString(5),rs.getInt(6),rs.getString(7),rs.getString(8));

                conectDataBase().close();
                return ex;

            }catch (Exception e) {
                System.out.println(e);
            }
            return null;
        }

        @Override
        public int deleteExamById(UUID id) {
            try {

                stmt = conectDataBase().createStatement();

                String sql = String.format("DELETE FROM exam WHERE id='"+id+"'");


                int result = stmt.executeUpdate(sql);
                conectDataBase().close();
                return 1;
            }catch (Exception e) {
                System.out.println(e);
            }
            return 0;
        }

        @Override
        public int updateExamById(UUID id, Exam exam) {
            try {

                stmt = conectDataBase().createStatement();

                String sql = String.format("UPDATE exam SET academic_year= '"+exam.getAcademic_year()+"',semester= '"
                        +exam.getSemester()+"',year= '"+exam.getYear()+"',faculty= '"+exam.getFaculty()+"',seats= '"
                        +exam.getSeats()+"',course= '"+exam.getCourse()+"',teacher= '"+exam.getTeacher()+"' WHERE id='"+id+"'");


                int result = stmt.executeUpdate(sql);
                conectDataBase().close();
                return 1;
            }catch (Exception e) {
                System.out.println(e);
            }
            return 0;
        }
    }


