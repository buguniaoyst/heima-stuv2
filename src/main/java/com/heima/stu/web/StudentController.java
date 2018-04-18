package com.heima.stu.web;

import com.heima.stu.domain.StudentInfo;
import com.heima.stu.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@RequestMapping("stu")
@Controller
public class StudentController {

    @Autowired
    private StudentService studentService;

    @RequestMapping(value = "login",method = RequestMethod.POST)
    public ResponseEntity<Map<String,Object>> login(StudentInfo studentInfo, HttpSession session) {

        StudentInfo loginStu = studentService.login(studentInfo);
        Map<String,Object> map = new HashMap<>();
        if (null == loginStu) {
            map.put("status", "failure");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        //将用户的数据存储在session中
        session.setAttribute("loginStu",loginStu);
        map.put("status", "success");
        map.put("loginUser", loginStu);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

}
