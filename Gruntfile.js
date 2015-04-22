module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        coffee: {
            'main': {
                files: [
                    {
                        src: 'js/home.coffee',
                        dest: 'js/home.js'
                    }
                ]
            }
        },
        uglify: {
            options: {
                banner: '/* 移动开发 <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            'main': {
                files: [
                    {
                        src: 'js/home.js',
                        dest: 'js/home.min.js'
                    }
                ]
            }
        },
        watch: {
            'main-css': {
                files: ['sass/*.sass'],
                tasks: ['docss']
            },
            'main-js': {
                files: ['js/*.coffee'],
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
        },
        copy: {
            main: {
                files: [
                    {
                        src: 'css/home.min.css',
                        dest: 'pack/',
                        filter: 'isFile'
                    },
                    {
                        src: 'js/home.min.js',
                        dest: 'pack/',
                        filter: 'isFile'
                    },
                    {
                        src: 'index.html',
                        dest: 'pack/',
                        filter: 'isFile'
                    },
                    {
                        src: 'img/*',
                        dest: 'pack/',
                        filter: 'isFile'
                    }
                ]
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'archive.zip'
                },
                files: [
                    {src: ['pack/*'], dest: '', filter: 'isFile'},
                    {src: ['pack/css/*'], dest: '', filter: 'isFile'},
                    {src: ['pack/js/*'], dest: '', filter: 'isFile'},
                    {src: ['pack/img/*'], dest: '', filter: 'isFile'}
                ]
            }
        },
        compass: {
            main: {
                options: {
                    sassDir: 'sass',
                    specify: ['sass/sprite.sass'],
                    imagesDir: "img",
                    relativeAssets: true,
                    cssDir: 'css',
                    outputStyle: 'expanded'
                }
            }
        },
        'font-spider': {
            main: {
                src: '*.html'
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
    // 加载 copy 插件
    grunt.loadNpmTasks('grunt-contrib-copy');
    // 加载 coffee 插件
    grunt.loadNpmTasks('grunt-contrib-coffee');
    // 加载 fontspider 字蛛
    grunt.loadNpmTasks('grunt-font-spider');

    // 注册事件
    grunt.registerTask('docss', ['sass:main', 'cssmin:main']);
    grunt.registerTask('dojs', ['coffee:main', 'uglify:main']);
    grunt.registerTask('docopy', ['copy:main']);
    grunt.registerTask('docompress', ['compress:main']);
    grunt.registerTask('docompass', ['compass:main']);
    grunt.registerTask('dofontspider', ['font-spider:main']);
};