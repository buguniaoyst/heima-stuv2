layui.use(['form', 'table', 'element'], function () {
    var table = layui.table
        , element = layui.element
        ,$ = layui.jquery
        , form = layui.form;
    element.render();


    $(function () {
        $.get("/rest/test/getHomeWorkDeatil",function (result) {
            if(result !== null && result !== undefined && result !== {}){
                var count = 0;
                //创建单选题
                var singleItems = createSingleItem(count, result.singleItems);
                $("#singleItemArea").html(singleItems);
                //创建多选题
                var multiItems = createMultiItem(result.singleItems.length, result.multiItems);
                $("#multiItemArea").html(multiItems);

                //创建编程题
                var codeItems = createCodeItem(new Number(result.singleItems.length)+ new Number(result.multiItems.length), result.codeItems);
                $("#codeItemArea").html(codeItems);
                form.render();
            }
        });
    });




    function createSingleItem(count, data){
        if(null !== data && [] !== data && undefined !== data){
            var singleItems = "";
            for(var i = 0;i<data.length;i++) {
                count++;
                var itemOptions = data[i].itemAnswerOption.split("$$");
                singleItems+= ' <div class="margin-large bianse" >\n' +
                    '                <h4 style="background-color: #F5F5F5">\n' +
                    '                    <div class="txt-border txt-small radius-big border-blue cusmargin" style=" margin-right:10px">\n' +
                    '                        <div class="txt radius-big bg-blue">'+count+'</div>\n' +
                    '                    </div>\n' +
                    '                    <div style="margin-left: 5%">\n' +data[i].itemContent+
                    '                    </div>\n' +
                    '                </h4>\n' +
                    '                <div style="margin-left: 10px;margin-top: 2%;">\n' +
                    '                    <div >\n' +
                    '                        <input type="radio" name="sex" value="nan" title="'+itemOptions[0]+'">\n' +
                    '                    </div>\n' +
                    '                    <div>\n' +
                    '                        <input type="radio" name="sex" value="nan" title="'+itemOptions[1]+'">\n' +
                    '                    </div>\n' +
                    '                    <div>\n' +
                    '                        <input type="radio" name="sex" value="nan" title="'+itemOptions[2]+'">\n' +
                    '                    </div>\n' +
                    '                    <div>\n' +
                    '                        <input type="radio" name="sex" value="nan" title="'+itemOptions[3]+'">\n' +
                    '                    </div>\n' +
                    '                </div>\n' +
                    '            </div>';
            }

            return singleItems;
        }
    };

    function createMultiItem(count,data) {
        if(null !== data && [] !== data && undefined !== data){
            var singleItems = "";
            for(var i = 0;i<data.length;i++) {
                count++;
                var itemOptions = data[i].itemAnswerOption.split("$$");
                singleItems+= ' <div class="margin-large bianse" >\n' +
                    '                <h4 style="background-color: #F5F5F5">\n' +
                    '                    <div class="txt-border txt-small radius-big border-blue cusmargin" style=" margin-right:10px">\n' +
                    '                        <div class="txt radius-big bg-blue">'+count+'</div>\n' +
                    '                    </div>\n' +
                    '                    <div style="margin-left: 5%">\n' +data[i].itemContent+
                    '                    </div>\n' +
                    '                </h4>\n' +
                    '                <div style="margin-left: 10px;margin-top: 2%;">\n' +
                    '                    <div >\n' +
                    '                        <input type="checkbox" lay-skin="primary" name="sex" value="nan" title="'+itemOptions[0]+'">\n' +
                    '                    </div>\n' +
                    '                    <div>\n' +
                    '                        <input type="checkbox" lay-skin="primary" name="sex" value="nan" title="'+itemOptions[1]+'">\n' +
                    '                    </div>\n' +
                    '                    <div>\n' +
                    '                        <input type="checkbox" lay-skin="primary" name="sex" value="nan" title="'+itemOptions[2]+'">\n' +
                    '                    </div>\n' +
                    '                    <div>\n' +
                    '                        <input type="checkbox" lay-skin="primary" name="sex" value="nan" title="'+itemOptions[3]+'">\n' +
                    '                    </div>\n' +
                    '                </div>\n' +
                    '            </div>';
            }

            return singleItems;
        };
    };


    function createCodeItem(count,data) {
        if(null !== data && [] !== data && undefined !== data){
            var singleItems = "";
            for(var i = 0;i<data.length;i++) {
                count++;
                singleItems+= '<div class="margin-large bianse">\n' +
                    '               <h4 style="background-color: #F5F5F5">\n' +
                    '                   <div class="txt-border txt-small radius-big border-blue cusmargin" style=" margin-right:10px">\n' +
                    '                       <div class="txt radius-big bg-blue">'+count+'</div>\n' +
                    '                   </div>\n' +
                    '                   <div style="margin-left: 5%">\n' +data[i].itemContent+
                    '                   </div>\n' +
                    '               </h4>\n' +
                    '               <div style="margin-top: 2%;">\n' +
                    '                   <textarea name="" required lay-verify="required" placeholder="请将你的程序粘贴到此文本域" class="layui-textarea"></textarea>\n' +
                    '               </div>\n' +
                    '           </div>';
            }

            return singleItems;
        };
    };





});