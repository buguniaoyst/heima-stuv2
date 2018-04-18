$(function () {
    var static_prefix = '/static/assets/js/stu';
    var url_prefix = '/rest';
    vipspa.start({
        view: '#admin-body',
        router: {
            'home': {
                templateUrl:  'home.html',
                controller: static_prefix + '/home.js'
            },
            'stu_config_pwd': {
                templateUrl: url_prefix + '/stu_config/stu_pwd',
                controller: static_prefix + '/stu_config/stu_pwd.js'
            },
            'stu_config_source': {
                templateUrl: url_prefix + '/stu_config/stu_source',
                controller: static_prefix + '/stu_config/stu_source.js'
            },
            'stu_test': {
                templateUrl: url_prefix + '/stu_test/stuTest',
                controller: static_prefix + '/stu_test/stuTest.js'
            },
            'stu_home_work': {
                templateUrl: url_prefix + '/stu_test/stuHomeWork',
                controller: static_prefix + '/stu_test/stuHomeWork.js'
            },
            'tests': {
                templateUrl: url_prefix + 'tests/tests',
                controller: static_prefix + '/tests/tests.js'
            },
            'stu_course_before_day01': {
                templateUrl: url_prefix + '/stu_course/day01/stu_course_before',
                controller: static_prefix + '/stu_course/stu_course_before.js'
            },
            'stu_course_starting_day01': {
                templateUrl: url_prefix + '/stu_course/day01/stu_course_starting',
                controller: static_prefix + '/stu_course/stu_course_starting.js'
            },
            'stu_course_end_day01': {
                templateUrl: url_prefix + '/stu_course/day01/stu_course_end',
                controller: static_prefix + '/stu_course/stu_course_end.js'
            },
            'cate': {
                templateUrl: url_prefix + 'cate',
                controller: static_prefix + '/cate.js'
            },
            'file': {
                templateUrl: url_prefix + 'file',
                controller: static_prefix + '/file.js'
            },
            'tag': {
                templateUrl: url_prefix + 'tag',
                controller: static_prefix + '/tag.js'
            },
            'about': {
                templateUrl: url_prefix + 'about',
                controller: static_prefix + '/about.js'
            },
            'keyword': {
                templateUrl: url_prefix + 'keyword',
                controller: static_prefix + '/keyword.js'
            },
            'users': {
                templateUrl: url_prefix + 'user/users',
                controller: static_prefix + '/user/user.js'
            },
            'settings': {
                templateUrl: url_prefix + 'settings',
                controller: static_prefix + '/settings.js'
            },
            'qrcode': {
                templateUrl: url_prefix + 'settings/qrcode',
                controller: static_prefix + '/qrcode.js'
            },
            'comment': {
                templateUrl: url_prefix + 'comment',
                controller: static_prefix + '/comment.js'
            },
            'message': {
                templateUrl: url_prefix + 'message',
                controller: static_prefix + '/message.js'
            },
            'noteblog': {
                templateUrl: url_prefix + 'noteblog',
                controller: static_prefix + '/noteblog.js'
            },
            'profile': {
                templateUrl: url_prefix + 'profile',
                controller: static_prefix + '/profile.js'
            },
            'defaults': 'home' //默认路由
        },
        errorTemplateId: '#error'
    });

});
