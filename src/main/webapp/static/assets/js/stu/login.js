layui.use(['form','jquery'], function () {
    var form = layui.form,
        $ = layui.jquery;

    form.verify({
        username: function (value) {
            if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                return '用户名不能有特殊字符';
            }
            if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                return '用户名首尾不能出现下划线\'_\'';
            }
            if (/^\d+\d+\d$/.test(value)) {
                return '用户名不能全为数字';
            }
            if (value.length < 2 || value.length > 4) {
                return "用户名必须2~4位，且不能包含空格";
            }
        }
        ,stuNo: function (value) {
            if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                return '学号中不能有特殊字符';
            }
            if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                return '学号中首尾不能出现下划线\'_\'';
            }
            if (/^\d+\d+\d$/.test(value)) {
                return '学号中不能全为数字';
            }
        }
        , pass: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ]
    });

    //
    // $(function () {
    //     //提交新增表单
    //     $("#loginBtnId").click(function () {
    //         var studentName =  $("#studentName").val();
    //         var studentNo = $("#studentNo").val();
    //         var password  = $("#password").val();
    //         $.post('/rest/stu/login', {studentName:studentName,studentNo:studentNo,password:password}, function (result) {
    //             var userName;
    //             if(result.loginUser){
    //                 userName = result.loginUser.studentName;
    //             }
    //             window.location.href = "/rest/index?userName="+userName;
    //         });
    //        // return false;
    //     });
    // })


});