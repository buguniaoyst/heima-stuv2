layui.use(['form','jquery'], function () {
    var form = layui.form,
        $ = layui.jquery;

    $(function () {
        //加载用户姓名
        var searchStr = location.search;
        // 由于searchStr属性值包括“?”，所以除去该字符
        searchStr = searchStr.substr(1);//将searchStr字符串分割成数组，数组中的每一个元素为一个参数和参数值
        var searchs = searchStr.split("&");//获得第一个参数和值
        var params = searchs[0].split("=");
        var userName = decodeURI(params[1]);
        $("#userNameSpan").html(userName);

        //加载日期
        var date = new Date().format('yyyy年MM月dd日');
        $("#currentDateId").html('今天是：' + date);


    });

});