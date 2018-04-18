layui.use(['element', 'form', 'layer'], function () {
    var form = layui.form;
    var element = layui.element;
    var $ = layui.$;
    element.render();
    form.render();

    var E = window.wangEditor;
    var editor = new E('#note-editor');
    editor.create();

    var post = function (data, msg) {
        data.field.content = editor.txt.html();
        $.ajax({
            type: "post"
            , url: BMY.url.prefix + "/note/doEdit"
            , dataType: "json"
            , data: data.field
            , success: function (json) {
                BMY.okMsgHandle(json, msg);
                location.hash = vipspa.stringifyParam("notes", {});
            }
        });
    };
    //监听提交
    form.on('submit(noteSubmit)', function (data) {
        post(data, "修改笔记成功！");
        return false;
    });

});

$(function () {
    $('input#tagName').tagsInput({
        defaultText: "点我新增标签",
        width: "auto",
        height: "32px",
        minChars: 1,
        onChange: function (a, e) {
            var length = $("input#tagName").val().split(",").length;
            if (length > 4) {
                layer.msg("最多只能4个！");
                $("#tagName").removeTag(e)
            }
        }
    });
})





