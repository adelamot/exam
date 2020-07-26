package IBMproject.Exams;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.Connection;
import java.sql.DriverManager;

@SpringBootApplication
public class ExamsApplication {

	public static Connection conectDataBase() throws Exception {
		try {
			String driver = "com.mysql.cj.jdbc.Driver";
			String url = "jdbc:mysql://127.0.0.1:3306/ibmdb";
			String username = "root";
			String password = "abcd";
			Class.forName(driver);

			Connection conn = DriverManager.getConnection(url, username, password);
			System.out.println("Connected");
			return conn;
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;

	}

	public static void main(String[] args) throws Exception {


		SpringApplication.run(ExamsApplication.class, args);
		//conectDataBase();  //this doesnt work:    java.lang.ClassNotFoundException: com.mysql.cj.jdbc.Driver

	}

}
