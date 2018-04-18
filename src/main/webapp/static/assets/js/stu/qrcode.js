layui.use(['upload', 'element'], function () {
    var element = layui.element
        , upload = layui.upload;
    element.render();

    //执行实例
    var alipay = upload.render({
        elem: '#alipay' //绑定元素
        , url: BMY.url.prefix + '/settings/upload/' //上传接口
        , data: {payType: "alipay"}
        , done: function (res) {
            if (res.code === 0) {
                $("#a").find("img").attr("src", res.data.src);
            }
            layer.msg(res.msg);
        }
        , error: function () {
            layer.msg("上传失败！");
        }
    });

    var wechat = upload.render({
        elem: '#wechat' //绑定元素
        , url: BMY.url.prefix + '/settings/upload/' //上传接口
        , data: {payType: "wechat"}
        , done: function (res) {
            if (res.code === 0) {
                $("#w").find("img").attr("src", res.data.src);
            }
            layer.msg(res.msg);
        }
        , error: function () {
            layer.msg("上传失败！");
        }
    });


});







