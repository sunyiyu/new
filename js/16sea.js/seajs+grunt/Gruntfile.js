
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            styles:{
                files: [
                    {
                        expand: true,
                        cwd: 'tmp',
                        src: ['**/*.css', '!**/*-debug.css'],
                        dest: 'dist/',
                        ext: '.css'
                    }
                ]
            }
        },
        uglify : {
            styles: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'tmp',
                        src: ['**/*.js', '!**/*-debug.js'],
                        dest: 'dist/',
                        ext: '.js'
                    }
                ]
            }
        },
        transport: {
            styles: {
                files: [
                    {
                        expand: true,
                        cwd: 'js',
                        src: '**/*',
                        dest: 'tmp/js'
                    },
                    {
                        expand: true,
                        cwd: 'css',
                        src: '**/*',
                        dest: 'tmp/css'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('build', ['transport', 'uglify', 'cssmin']);
    grunt.registerTask('build2', ['cssmin']);
};