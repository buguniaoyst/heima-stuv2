var template = {
    footer:
    '<div class="layui-fluid bottom-nav">' +
    '   <div class="layui-row">' +
    '       <div class="layui-col-md4 layui-col-md-offset4 copyright">' +
    '           <p style="text-align: center;">' +
    '               <i class="fa fa-copyright"></i>&nbsp;{{words}} powered by' +
    '                <a href="//wuwenbin.me" target="_blank" style="color: #1E9FFF;">NoteBlog</a> in 2018 ver3.' +
    '           </p>' +
    '       </div>' +
    '   </div> ' +
    '</div>'
    , header:
    '<div class="header">' +
    '    <div class="layui-container">' +
    '        <div class="layui-row nav-header">' +
    '            <div class="layui-col-xs9 layui-col-sm3 layui-col-md3">' +
    '                <a class="logo animated flipInX" href="/index"><i class="fa fa-graduation-cap"></i>&nbsp;{{params.website_logo_words}}</a>' +
    '                <h2 id="title" style="display: none;margin-left: 10%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;" v-if="st">{{title}}</h2>' +
    '            </div>' +
    '            <div class="layui-col-xs3 layui-col-sm-offset2 layui-col-sm7 layui-hide-md layui-hide-lg nav-btn">' +
    '                <a href="javascript:void(0);" id="side-nav"><i class="fa fa-navicon"></i> </a>' +
    '            </div>' +
    '            <div class="layui-col-md-offset2 layui-col-md7 layui-hide layui-show-lg-inline-block layui-show-md-inline-block nav-btn">' +
    '                <a href="/index" :class="{ active: home }"><i class="layui-icon">&#xe68e;</i> {{params.menu_home}}</a>' +
    '                <a href="/note" :class="{ active: note }"><i class="layui-icon">&#xe609;</i> {{params.menu_note}}</a>' +
    '                <a href="/profile" :class="{ active: mine }"><i class="layui-icon">&#xe6af;</i> {{params.menu_mine}}</a>' +
    '                <a href="/search" :class="{ active: search }" target="_blank"><i class="layui-icon">&#xe615;</i> {{params.menu_search}}</a>' +
    '                <a v-show="params.menu_link_show == 1" :href="params.menu_link_href" target="_blank"><i :class="params.menu_link_icon" style="font-size: 16px;"></i> {{params.menu_link}}</a>' +
    '            </div>' +
    '            <ul class="layui-nav layui-nav-tree layui-nav-side">' +
    '                <li class="layui-nav-item">' +
    '                   <a href="/index" :class="{ \'layui-this\': home }"><i class="layui-icon">&#xe68e;</i> {{params.menu_home}}</a>' +
    '                </li>' +
    '                <li class="layui-nav-item">' +
    '                   <a href="/note" :class="{ \'layui-this\': note }"><i class="layui-icon">&#xe609;</i> {{params.menu_note}}</a>' +
    '                </li>' +
    '                <li class="layui-nav-item">' +
    '                   <a href="/profile" :class="{ \'layui-this\': mine }"><i class="layui-icon">&#xe715;</i> {{params.menu_mine}}</a>' +
    '                </li>' +
    '                <li class="layui-nav-item">' +
    '                   <a href="/search" :class="{ \'layui-this\': search }"><i class="layui-icon">&#xe615;</i> {{params.menu_search}}</a>' +
    '                </li>' +
    '                <li class="layui-nav-item" v-if="params.menu_link_show == 1">' +
    '                     <a :href="params.menu_link_href" target="_blank"><i :class="params.menu_link_icon" style="font-size: 15px;"></i> {{params.menu_link}}</a>' +
    '                </li>' +
    '            </ul>' +
    '        </div>' +
    '    </div>' +
    '</div>'
    , block:
    '<div class="layui-container" style="margin-top: 70px;">' +
    '        <blockquote class="layui-elem-quote">' +
    '            <template v-if="quote.showBlog">博文统计：共【<span class="sum-font">{{quote.blogCount}}</span>】篇；</template>' +
    '            <template v-if="quote.showNote">笔记统计：共【<span class="sum-font">{{quote.noteCount}}</span>】条；</template>' +
    '            <template v-if="quote.showFile">资源统计：共【<span class="sum-font">{{quote.fileCount}}</span>】条；</template>' +
    '            <template v-if="quote.showSearch">搜索统计：共【<span class="sum-font">{{quote.searchCount}}</span>】个；</template>' +
    '            <span v-if="quote.showText" v-html="quote.text"></span>' +
    '            <div v-show="quote.showClock" class="clock layui-show-md-inline-block layui-show-lg-inline-block layui-hide-xs layui-hide-sm">' +
    '                <span class="clock-font">当前日期</span>：<span id="current-datetime"></span>' +
    '            </div>' +
    '        </blockquote>' +
    '    </div>'
    , articles:
    '<div id="main-body" class="layui-container">' +
    '        <div class="layui-row layui-col-space10 animated fadeInUp">' +
    '            <slot name="list"></slot>' +
    '            <div class="layui-col-md3">' +
    '                <div id="affix-side">' +
    '                   <slot name="infoLabel"></slot>' +
    '                   <slot name="search"></slot>' +
    '                   <slot name="cate"></slot>' +
    '                   <slot name="random"></slot>' +
    '                   <slot name="tab"></slot>' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>'
    , article:
        '<div id="article-list" class="layui-col-md9"></div>'
    , info:
    '<div class="layui-tab layui-tab-card">' +
    '   <ul class="layui-tab-title select-none">' +
    '       <li class="layui-this" v-show="info">网站信息</li>' +
    '       <li :class="{ \'layui-this\' : !info }">会员中心</li>' +
    '   </ul>' +
    '   <div class="layui-tab-content">' +
    '       <div class="layui-tab-item layui-show layui-text" v-html="utext" v-show="info">' +
    '           {{ utext }}' +
    '       </div>' +
    '       <div class="layui-tab-item" :class="{ \'layui-show\' : !info }">' +
    '           <p style="text-align: center" v-show="su == null">' +
    '               <a v-if="qq == 1" @click="tip()" href="/api/qq" class="layui-btn layui-btn-sm layui-btn-primary">' +
    '                   <i class="fa fa-qq"></i> 网站用户' +
    '               </a>' +
    '               <a href="/login" class="layui-btn layui-btn-sm layui-btn-primary"><i class="fa fa-user-o"></i> 网站管理</a>' +
    '           </p>' +
    '           <p v-if="su != null" style="padding-left: 20px;">' +
    '               <a href="/token/logout" style="font-size: 14px;">' +
    '                   <img id="logout" @mouseover="tipsOver()" @mouseout="tipsOut()" style="height: 45px;width: 45px;" class="layui-circle" :src="su != null ?su.avatar:\'\'">&nbsp;&nbsp;欢迎你，{{su.nickname}}！' +
    '               </a>' +
    '               &nbsp;<a v-if="su !=null && su.dri == 1" href="/views/index" target="_blank" class="layui-text">后台管理 <i class="fa fa-angle-double-right"></i> </a>' +
    '           </p>' +
    '       </div>' +
    '   </div>' +
    '</div>'
    , search:
    '<div id="search-panel" class="layui-tab layui-tab-card">' +
    '   <div class="layui-tab-content select-none">' +
    '       <p class="title">搜索库 <small style="float: right;"><a href="/search" target="_blank"><i>前往 <i class="fa fa-angle-double-right"></i></i></a></small> </p>' +
    '       <hr>' +
    '       <input name="words" v-model="words" @keyup.enter="searchAll" :value="sw" @input="updateValue($event.target.value)" ' +
    '           placeholder="键入Enter键以搜索" autocomplete="off" class="layui-input search-box">' +
    '   </div>' +
    '</div>'
    , cate:
    '<div class="layui-tab layui-tab-card layui-article-cate">' +
    '   <div class="layui-tab-content select-none">' +
    '       <p class="title">分类堆</p>' +
    '       <hr>' +
    '       <template v-for="c in cates">' +
    '           <p><a :href="cateUrl(c)"><i class="layui-icon">&#xe60a;</i> {{c.cnName}}</a></p>' +
    '       </template>' +
    '   </div> ' +
    '</div>'
    , random:
    '<div class="layui-tab layui-tab-card layui-master-recommend">' +
    '   <div class="layui-tab-content select-none">' +
    '       <p class="title">博文栈</p>' +
    '       <hr>' +
    '       <template v-for="r in articles">' +
    '           <p><a :href="\'/article/\'+r.id">{{r.title}}</a> </p>' +
    '       </template>' +
    '   </div> ' +
    '</div>'
    , tab:
    '<div class="layui-tab layui-tab-card layui-tags">' +
    '   <div class="layui-tab-content select-none">' +
    '       <p class="title">标签页</p>' +
    '       <hr>' +
    '       <template v-for="t in tabs">' +
    '           <span class="layui-badge-rim" @click="find(t.name)">{{t.name}} ({{t.cnt}})</span>' +
    '       </template>' +
    '   </div> ' +
    '</div>'
    , articlePage:
    '<div id="blog-body" class="layui-container">' +
    '   <div class="layui-row layui-col-space10">' +
    '       <div id="blog-info" class="layui-col-md9 animated fadeInUp">' +
    '           <div class="layui-collapse layui-panel layui-article">' +
    '               <div class="layui-colla-item">' +
    '                   <div class="layui-colla-content layui-show layui-article">' +
    '                       <fieldset class="layui-elem-field layui-field-title layui-article-page-title">' +
    '                           <legend class="center-to-head" align="center">{{article.title}}</legend>' +
    '                       </fieldset>' +
    '                       <div class="layui-text layui-blog-body">' +
    '                           <div class="layui-row">' +
    '                               <div class="layui-col-md6 layui-col-md-offset3 text-center blog-base-info">' +
    '                                   <span><i class="fa fa-clock-o"></i> {{postDate}}</span>' +
    '                                   <span><i class="fa fa-user-o"></i> <span style="color: #FF5722;">{{author}}</span><svg class="icon" aria-hidden="true"><use xlink:href="#icon-renzhengkaobei"></use></svg></span>' +
    '                                   <span><i class="fa fa-comment-o"></i> {{comments}}</span>' +
    '                                   <span><i class="fa fa-eye"></i> {{article.views}}</span>' +
    '                               </div>' +
    '                           </div>' +
    '                           <hr>' +
    '                           <div class="content detail" v-html="article.content"></div>' +
    '                       </div>' +
    '                       <div class="layui-row text-center layui-mt20">' +
    '                           <div v-if="article.appreciable" class="layui-btn layui-btn-warm layui-hide layui-show-md-inline-block" @click="money(alipay,wechat)"><i class="fa fa-rmb"></i> 打赏</div>' +
    '                           <div class="layui-btn" @click="emotion()"><i class="fa fa-thumbs-o-up"></i> 赞 ({{approve}})</div>' +
    '                       </div>' +
    '                       <div class="layui-row layui-mt20">' +
    '                           <blockquote class="layui-elem-quote text-center " style="border: none;">' +
    '                               <span class="layui-show-md-inline-block layui-hide">文章出处：{{name}}</span>&nbsp;&nbsp;&nbsp;&nbsp;' +
    '                               <span class="layui-show-md-inline-block layui-hide">文章地址：{{url}}</span>&nbsp;&nbsp;&nbsp;&nbsp;' +
    '                               <span>转载注明下哦！o(≧v≦)o~~</span>' +
    '                           </blockquote>' +
    '                       </div>' +
    '                       <div class="layui-row layui-mt20">' +
    '                           <p class="blog-tags">' +
    '                           标签：' +
    '                               <template v-for="t in tags">' +
    '                                   <span>{{t.name}}</span>' +
    '                               </template>' +
    '                           </p>' +
    '                       </div>' +
    '                       <div class="layui-row layui-col-space20 layui-mt20 article-page-similar">' +
    '                           <p>相似文章：</p>' +
    '                           <hr>' +
    '                           <ul>' +
    '                               <template v-for="(a,index) in similars">' +
    '                                   <li><a :href="\'/article/\'+a.id" class="layui-word-aux"><i class="fa fa-circle-thin"></i>&nbsp;&nbsp;{{a.title}}</a> </li>' +
    '                               </template>' +
    '                           </ul>' +
    '                       </div>' +
    '                   </div>' +
    '               </div>' +
    '           </div>' +
    '           <div class="layui-collapse layui-panel layui-article">' +
    '               <slot name="post"></slot>' +
    '           </div>' +
    '           <div class="layui-collapse layui-panel layui-article">' +
    '               <slot name="comment"></slot>' +
    '           </div>' +
    '       </div>' +
    '       <div class="layui-col-md3">' +
    '           <div id="affix-side">' +
    '               <slot name="info"></slot>' +
    '               <slot name="search"></slot>' +
    '               <slot name="cate"></slot>' +
    '               <slot name="similar"></slot>' +
    '           </div>' +
    '       </div>' +
    '   </div>' +
    '</div>'
    , similar:
    '<div class="layui-tab layui-tab-card layui-similar">' +
    '   <div class="layui-tab-content select-none">' +
    '       <p class="title">相似文章</p>' +
    '       <hr>' +
    '       <template v-for="a in articles">' +
    '           <p><a :href="\'/article/\'+a.id">{{a.title}}</a> </p>' +
    '       </template>' +
    '   </div> ' +
    '</div>'
    , comment:
    '<div id="cta" class="layui-collapse layui-panel layui-article">' +
    '   <div class="layui-colla-item">' +
    '       <div class="layui-colla-content layui-show layui-article comment">' +
    '           <fieldset class="layui-elem-field layui-field-title">' +
    '               <legend>随便说两句</legend>' +
    '               <div class="layui-field-box">' +
    '                   <label for="comment-input"></label>' +
    '                       <textarea id="comment-input" style="display: none;"></textarea>' +
    '               </div>' +
    '               <button v-if="su != null" class="layui-btn layui-btn-sm" style="float: right;width: 120px;" @click="submit(id)" >发表</button>' +
    '               <a v-if="su == null" class="layui-btn layui-btn-sm" style="float: right;width: 120px;"  href="/api/qq" target="_blank" @click="beforeLogin();" id="beforeLogin"><i class="fa fa-qq"></i> 请先登录</a>' +
    '           </fieldset>' +
    '       </div>' +
    '   </div>' +
    '</div>'
    , messageComment:
    '<div id="cta" class="layui-collapse layui-panel layui-article">' +
    '   <div class="layui-colla-item">' +
    '       <div class="layui-colla-content layui-show layui-article comment">' +
    '           <fieldset class="layui-elem-field layui-field-title">' +
    '               <legend>随便说两句</legend>' +
    '               <div class="layui-field-box">' +
    '                   <label for="comment-input"></label>' +
    '                       <textarea id="comment-input" style="display: none;"></textarea>' +
    '               </div>' +
    '               <button v-if="su != null" class="layui-btn layui-btn-sm" style="float: right;width: 120px;" @click="submit()" >发表</button>' +
    '               <a v-if="su == null" class="layui-btn layui-btn-sm" style="float: right;width: 120px;"  href="/api/qq" target="_blank" @click="beforeLogin();" id="beforeLogin"><i class="fa fa-qq"></i> 请先登录</a>' +
    '           </fieldset>' +
    '       </div>' +
    '   </div>' +
    '</div>'
    , commentArea:
    '<div class="layui-collapse layui-panel layui-article" id="ca">' +
    '   <div class="layui-colla-item">' +
    '       <div class="layui-colla-content layui-show layui-article comment">' +
    '           <fieldset class="layui-elem-field layui-field-title">' +
    '               <legend>网友评论・留言区</legend>' +
    '               <div class="layui-field-box comment">' +
    '                   <p v-if="comments.totalCount == 0" class="text-center">暂无评论</p>' +
    '                   <blockquote class="layui-elem-quote layui-mt20" v-html="tips"></blockquote>' +
    '                   <template v-for="c in comments.result">' +
    '                       <div class="layui-row comment-block" v-if="c.enable">' +
    '                           <div class="layui-row">' +
    '                               <div class="layui-col-md1 layui-col-xs1 comment-avatar">' +
    '                                   <img class="layui-circle" :src="c.avatar">' +
    '                               </div>' +
    '                               <div class="layui-col-md10 layui-col-xs9" style="border-bottom: 1px dotted #dbdbdb;padding-bottom: 10px;">' +
    '                                   <i class="fa fa-user-o"></i> <span class="comment-user" :style="masterColor(c.userId)">{{c.nickname}}&nbsp;<svg v-if="c.userId==1" class="icon" aria-hidden="true"><use xlink:href="#icon-renzhengkaobei"></use></svg>&nbsp;&nbsp;</span><small><i class="fa fa-location-arrow"></i> {{c.ipCnAddr}}网友</small><br/>' +
    '                                   <i class="fa fa-clock-o"></i> <span class="comment-datetime">{{postDt(c.post)}}</span>' +
    '                               </div>' +
    '                               <div class="layui-row comment-block-content">' +
    '                                   <p  v-html="c.comment"></p>' +
    '                               </div>' +
    '                               <div class="layui-row" style="text-align: right;" v-show="re">' +
    '                                    <a @click="reback(c.nickname,c.comment);" style="cursor: pointer;"> <i class="fa fa-comment"></i> 回复</a>' +
    '                               </div>' +
    '                           </div>' +
    '                       </div>' +
    '                       <hr>' +
    '                   </template>' +
    '                   <div class="row">' +
    '                       <p class="comment-page"></p>' +
    '                   </div>' +
    '               </div>' +
    '           </fieldset>' +
    '       </div>' +
    '   </div>' +
    '</div>'
    , notePage:
    '<div id="note-body" class="layui-container animated fadeInUp">' +
    '   <div id="note-operate" class="layui-row">' +
    '       <div class="layui-col-lg4 layui-col-md4 layui-col-sm5 layui-col-xs12 animated fadeInUp">' +
    '           <input name="words" v-model="words" @keyup.enter="searchAll"  :value="sw" @input="updateValue($event.target.value)" ' +
    '                       placeholder="敲入关键字，按Enter键搜索" autocomplete="off" class="layui-input search-box" style="height: 35px; ">' +
    '       </div>' +
    '       <div class="layui-col-lg-offset4 layui-col-lg4 layui-col-md-offset4 layui-col-md4 layui-col-sm-offset3 layui-col-sm4 layui-hide-xs" style="text-align: right;">' +
    '           <div class="layui-btn-group">' +
    '               <button id="collaspan" class="layui-btn layui-btn-primary layui-btn-sm">' +
    '                    <i class="fa fa-angle-double-down"></i>' +
    '                </button>' +
    '               <button id="expand" class="layui-btn layui-btn-primary layui-btn-sm">' +
    '                    <i class="fa fa-angle-double-up"></i>' +
    '                </button>' +
    '           </div>' +
    '       </div>' +
    '   </div>' +
    '   <hr class="animated fadeInUp">' +
    '   <ul class="layui-timeline animated fadeInUp" id="timeline">' +
    '       <li class="layui-timeline-item layui-note-cover">' +
    '            <i class="layui-icon layui-timeline-axis">&#xe63f;</i>' +
    '            <div class="layui-timeline-content layui-text">' +
    '                <h3 class="layui-timeline-title">笔记封面</h3>' +
    '            </div>' +
    '        </li>' +
    '   </ul>' +
    '</div>'
    , messagePage:
    '<div id="message-body" class="layui-container">' +
    '   <div class="layui-row layui-col-space10">' +
    '       <div id="message-info" class="layui-col-md9 animated fadeInUp">' +
    '           <div class="layui-collapse layui-panel layui-article">' +
    '               <slot name="post"></slot>' +
    '           </div>' +
    '           <div class="layui-collapse layui-panel layui-article">' +
    '               <slot name="comment"></slot>' +
    '           </div>' +
    '       </div>' +
    '       <div class="layui-col-md3">' +
    '           <div id="affix-side">' +
    '               <slot name="info"></slot>' +
    '               <slot name="search"></slot>' +
    '               <slot name="cate"></slot>' +
    '               <slot name="tags"></slot>' +
    '           </div>' +
    '       </div>' +
    '   </div>' +
    '</div>'
};

Vue.component('bmy-footer', {
    template: template.footer
    , props: ['words']
});

Vue.component('bmy-header', {
    template: template.header
    , props: {
        params: {
            type: Object
            , default: {}
        }
        , home: {
            type: Boolean
            , default: false
        }
        , note: {
            type: Boolean
            , default: false
        }
        , mine: {
            type: Boolean
            , default: false
        }
        , search: {
            type: Boolean
            , default: false
        }
        , st: {
            type: Boolean
            , default: false
        }
        , title: {
            type: String
            , default: ""
        }
    }
    , data: function () {
        return {
            show: false
        }
    }
    , methods: {
        headerScroll: function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.show = scrollTop > 175
            if (this.st) {
                $("a.logo").removeClass("flipInX");
                var minWidth = $("#blog-info").find(".layui-article:eq(0)>.layui-colla-item").width();
                minWidth = minWidth <= 400 ? 280 : minWidth;
                $("#title").css("min-width", minWidth).css("font-weight", "500");
                if (this.show) {
                    $(".logo").slideUp("fast", function () {
                        $("#title").slideDown("fast");
                    })
                } else {
                    $("#title").slideUp("fast", function () {
                        $(".logo").slideDown("fast");
                    })
                }
            }
            if ($(".logo").is(":visible") && $("#title").is(":visible")) {
                $(".logo").hide();
            }
        }
    }
    , mounted: function () {
        window.addEventListener("scroll", this.headerScroll);
    }
});

Vue.component('bmy-block', {
    template: template.block
    , props: {
        quote: {
            type: Object
            , default: {
                blogCount: 0
                , noteCount: 0
                , searchCount: 0
                , fileCount: 0
                , showBlog: false
                , showSearch: false
                , showNote: false
                , showClock: false
                , showFile: false
                , showText: false
                , text: ''
            }
        }
    }

});

Vue.component('bmy-articles', {
    template: template.articles
});

Vue.component('bmy-list', {
    template: template.article
    , props: ['item', 'tags']
});

Vue.component('bmy-info', {
    template: template.info
    , props: {
        utext: String
        , qq: Number
        , info: {
            type: Boolean
            , default: true
        }
        , su: {
            type: Object
            , default: {}
        }
    }
    , data: function () {
        return {
            layerIndex: null
        }
    }
    , methods: {
        tip: function () {
            layer.msg('正在通过QQ登入', {icon: 16, shade: 0.1, time: 0})
        }
        , tipsOver: function () {
            this.layerIndex = layer.tips('点击注销', '#logout', {
                tips: [3, '#000']
            })
        }
        , tipsOut: function () {
            layer.close(this.layerIndex);
        }
    }
});

Vue.component('bmy-search', {
    template: template.search
    , props: ['sw']
    , data: function () {
        return {
            words: ''
        }
    }
    , mounted: function () {
        this.words = this.sw;
    }
    , methods: {
        updateValue: function (value) {
            this.words = value;
            this.$emit("input", value);
        }
        , searchAll: function () {
            var s = this.words;
            s = s !== undefined ? s : "";
            location.href = s === "" ? "/" : "/index?s=" + s;
        }
    }
});

Vue.component('bmy-cate', {
    template: template.cate
    , props: ['cates']
    , methods: {
        cateUrl: function (c) {
            return "/index?c=" + c.id;
        }
    }
});

Vue.component('bmy-random', {
    template: template.random
    , props: ['articles']
});

Vue.component('bmy-tab', {
    template: template.tab
    , props: ['tabs']
    , methods: {
        find: function (name) {
            location.href = "/index?s=" + name + "&t=" + name;
        }
    }
});

Vue.component('bmy-article-page', {
    template: template.articlePage
    , data: function () {
        return {
            approve: 0
        }
    }
    , props: ['article', 'author', 'name', 'comments', 'tags', 'similars', "alipay", "wechat", "su"]
    , computed: {
        postDate: function () {
            return BMY.dateFormatter(this.article.post, "-");
        }
        , url: function () {
            return location.href;
        }
    }
    , mounted: function () {
        this.approve = this.article.approveCnt
    }
    , methods: {
        money: function (alipay, wechat) {
            alipay = alipay === null || alipay === undefined || alipay === "" ? "/static/assets/img/noqrcode.jpg" : alipay;
            wechat = wechat === null || wechat === undefined || wechat === "" ? "/static/assets/img/noqrcode.jpg" : wechat;
            layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                area: ['640px', '300px'],
                shadeClose: true,
                skin: 'text-center',
                content:
                '<div class="layui-fluid">' +
                '   <div class="layui-row layui-mt20">' +
                '       <div class="layui-col-md6">' +
                '           <img src="' + wechat + '" style="height: 250px;width: 250px;">' +
                '           <p class="text-center">微信</p>' +
                '       </div>' +
                '       <div class="layui-col-md6">' +
                '           <img src="' + alipay + '" style="height: 250px;width: 250px;">' +
                '           <p class="text-center">支付宝</p>' +
                '       </div>' +
                '   </div> ' +
                '</div>'
            });
        }
        , emotion: function () {
            var that = this;
            var uid = that.su !== null ? that.su.id : "guest";
            if (BMY.getCookie("article::" + that.article.id + "::" + uid) != null) {
                layer.msg("近期您已经点过赞，感谢您的支持！");
            } else {
                $.post("/article/approve", {articleId: this.article.id}, function (json) {
                    if (json.code === BMY.status.ok) {
                        BMY.setCookie("article::" + that.article.id + "::" + uid, "noteblog system");
                        that.approve++;
                        layer.msg("谢谢您的支持！");
                    }
                })
            }
        }
    }
});

Vue.component('bmy-similar', {
    template: template.similar
    , props: ['articles']
});

Vue.component('bmy-comment', {
    template: template.comment
    , props: {
        su: {
            type: Object
            , default: {}
        },
        id: {
            type: String
        }
    }
    , methods: {
        submit: function (articleId) {
            var h1 = BMY.tempHtml === undefined ? "" : BMY.tempHtml;
            var h2 = BMY.tempHtml2 === undefined ? "" : BMY.tempHtml2;
            var comment = h1 + "<p>" + BMY.layedit.getContent(BMY.editor).replace(h2, "") + "</p>";
            if (comment === "<p></p>") {
                layui.layer.msg("请填写评论内容");
            } else {
                $.post("/token/comment/sub", {
                    articleId: articleId,
                    userId: this.su.id,
                    comment: comment
                }, function (resp) {
                    layer.msg(resp.message);
                    setTimeout(function () {
                        if (resp.code === BMY.status.ok) {
                            location.href = "/article/" + articleId + "?t_" + new Date().getTime() + "#ca"
                        }
                    }, 1000);
                });
            }
        }
        , beforeLogin: function () {
            var $btn = $("#beforeLogin");
            $btn.addClass("layui-btn-disabled");
            $btn.text("请刷新页面..")
        }
    }
});

Vue.component('bmy-message-comment', {
    template: template.messageComment
    , props: {
        su: {
            type: Object
            , default: {}
        }
    }
    , methods: {
        submit: function () {
            var h1 = BMY.tempHtml === undefined ? "" : BMY.tempHtml;
            var h2 = BMY.tempHtml2 === undefined ? "" : BMY.tempHtml2;
            var comment = h1 + "<p>" + BMY.layedit.getContent(BMY.editor).replace(h2, "") + "</p>";
            if (comment === "<p></p>") {
                layui.layer.msg("请填写评论内容");
            } else {
                $.post("/token/message/sub", {
                    userId: this.su.id,
                    comment: comment
                }, function (resp) {
                    layer.msg(resp.message);
                    setTimeout(function () {
                        if (resp.code === BMY.status.ok) {
                            location.href = "/message"
                        }
                    }, 1000);
                });
            }
        }
        , beforeLogin: function () {
            var $btn = $("#beforeLogin");
            $btn.addClass("layui-btn-disabled");
            $btn.text("请刷新页面..")
        }
    }
});

Vue.component('bmy-comment-list', {
    template: template.commentArea
    , props: {
        comments: {
            type: Object
            , default: {}
        }
        , tips: {
            type: String
            , default: {}
        }
        , re: {
            type: Boolean
            , default: false
        }
    }
    , methods: {
        masterColor: function (id) {
            return id === 1 ? "color:#FF5722;" : "";
        }
        , postDt: function (d) {
            return BMY.dateFormatter(d, "/");
        }
        , reback: function (name, content) {
            BMY.tempHtml =
                '<blockquote class="layui-elem-quote layui-quote-nm">' +
                '   <a href="javascript:;" class="re">回复@' + name + '</a>：' + content +
                '</blockquote>';
            BMY.tempHtml2 =
                '<a href="javascript:;" class="re">回复@' + name + '</a>：';
            $(window.frames["LAY_layedit_1"].document).find("body").html(BMY.tempHtml2);
            location.href = "#cta";
        }
    }
});

Vue.component('bmy-notes', {
    template: template.notePage
    , props: ['su', 'sw']
    , data: function () {
        return {
            words: ''
        }
    }
    , mounted: function () {
        this.words = this.sw;
    }
    , methods: {
        updateValue: function (value) {
            this.words = value;
            this.$emit("input", value);
        }
        , searchAll: function () {
            var s = this.words;
            s = s !== undefined ? s : "";
            location.href = s === "" ? "/note" : "/note?t=" + s + "&cc=" + s;
        }
    }
});

Vue.component('bmy-message-page', {
    template: template.messagePage
});