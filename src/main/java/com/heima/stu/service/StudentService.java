package com.heima.stu.service;

import com.github.abel533.entity.Example;
import com.heima.stu.domain.StudentInfo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService extends BaseService<StudentInfo>{
    public StudentInfo login(StudentInfo studentInfo) {
        Example example = new Example(StudentInfo.class);
        example.createCriteria().andEqualTo("studentName", studentInfo.getStudentName())
                .andEqualTo("studentNo", studentInfo.getStudentNo())
                .andEqualTo("password", studentInfo.getPassword());
        List<StudentInfo> studentInfos = getMapper().selectByExample(example);
        if(null != studentInfos && studentInfos.size()>0){
            return studentInfos.get(0);
        }
        return  null;
    }
}
