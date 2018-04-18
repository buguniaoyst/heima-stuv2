package com.heima.stu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

/**
 * @author 布谷鸟
 * @version V1.0
 */
@Controller
public class PageController {

    @RequestMapping("{pageName}")
    public String getPage(@PathVariable("pageName") String pageName, HttpSession session) {
        System.out.println(pageName);
        if ("index".equals(pageName)) {
            //判断是否登录
            Object loginUser = session.getAttribute("loginStu");
            if(null == loginUser){
                return "/login";
            }

        }
        return pageName;
    }

    @RequestMapping("{pageName}/{moduleName}")
    public String getModulePage(@PathVariable("pageName") String pageName, @PathVariable("moduleName") String moduleName) {
        System.out.println(pageName);
        return pageName+"/"+moduleName;
    }
    @RequestMapping("{pageName}/{moduleName}/{pageName2}")
    public String getModulePage(@PathVariable("pageName") String pageName, @PathVariable("moduleName") String moduleName,@PathVariable("pageName2") String pageName2) {
        System.out.println(pageName);
        return pageName+"/"+moduleName+"/"+pageName2;
    }

}
