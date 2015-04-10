module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/* 移动开发 <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            'main': {
                files: [
                    {
                        src: 'js/home.js',
                        dest: 'js/home.min.js'
                    },
                ]
            }
        },
        watch: {
            'main-css': {
                files: ['sass/*.sass'],
                tasks: ['docss']
            },
            'main-js': {
                files: ['js/*.js'],
                tasks: ['dojs']
            }
        },
        sass: {
            'main': {
                files: [
                    {
                        src: 'sass/home.sass',
                        dest: 'css/home.css'
                    }
                ]
            }
        },
        cssmin: {
            'main': {
                files: [
                    {
                        src: 'css/home.css',
                        dest: 'css/home.min.css'
                    }
                ]
            }
        }
    });

    // 加载 uglify 压缩 js
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 加载 cssmin 压缩 css
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // 加载 replace 文件内容替换
    grunt.loadNpmTasks('grunt-text-replace');
    // 加载 compress 压缩文件
    grunt.loadNpmTasks('grunt-contrib-compress');
    // 加载 sass css预处理器
    grunt.loadNpmTasks('grunt-contrib-sass');
    // 加载 watch 自动执行任务
    grunt.loadNpmTasks('grunt-contrib-watch');
    // 加载 css 精灵
    grunt.loadNpmTasks('grunt-contrib-compass');

    // 注册事件
    grunt.registerTask('docss', ['sass:main', 'cssmin:main']);
    grunt.registerTask('dojs', ['uglify:main']);
};