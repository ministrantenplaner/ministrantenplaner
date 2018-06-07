module.exports = function(grunt) {
	'use strict'
	require('load-grunt-tasks')(grunt)
	grunt.initConfig({
        clean: {
            build: ["build"]
        },

        /**************************************************************************************************
         * concat
         * Lädt alle Javscript Files aus frontend/src und js.
         * Erstellt daraus eine .js File je Projekt
         **************************************************************************************************/

        concat: {
            options: {
                separator: '\r\n \n'
            },
            frontend: {
                src: [
                    'frontend/src/js/konzepthaus.js',
                    'frontend/src/js/**/*.js'
                ],
                dest: 'public/frontend.js'
            }
        },
        ngtemplates: {
            konzepthaus: {
                cwd: 'frontend/src/html/',
                src: '**/*.html',
                dest: 'public/templates.js',
                options: {
                    prefix: 'html'
                }
            }
        },
        /**************************************************************************************************
         * less
         * Kompiliert alle less Dateien in css Code.
         * Browser prefix werden automatisch gesetzt
         **************************************************************************************************/
        less: {
            options: {
                plugins: [new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})]
            },
            frontend: {
                options: {
                    paths: [""],
                    relative: true
                },
                files: {
                    "public/frontend.css": "frontend/src/css/common.less"
                }
            },

        },

        /**************************************************************************************************
         * copy
         * Kopiert alle für das Deployment nötigen Daten in das 'public' Verzeichnis
         **************************************************************************************************/

        copy: {
            css: {
                cwd: 'css/',
                src: '**/*',
                dest: 'public/css',
                expand: true
            },
            favIcon: {
                cwd: '.',
                src: 'favicon.ico',
                dest: 'public/',
                expand: true
            },
            frontend_images: {
                cwd: 'frontend/src/images/',
                src: '**/*',
                dest: 'public/images',
                expand: true
            },
            libs: {
                cwd: 'libs/',
                src: '**',
                dest: 'public/libs/',
                expand: true
            },
            pdf: {
                cwd: 'pdf/',
                src: '**/*',
                dest: 'public/pdf/',
                expand: true
            }, 
            sitemap: {
                cwd: '.',
                src: 'sitemap.txt',
                dest: 'public/',
                expand: true
            },
        },
        watch: {
            frontjs: {
                files: ['frontend/src/js/**/*.js'],
                tasks: ['concat:frontend', 'notify:watch']
            },
            less: {
                files: ['frontend/src/css/*.less'],
                tasks: ['less', 'notify:watch']
            },
            hypertxt: {
                files: ['frontend/src/html/**/*'],
                tasks: ['ngtemplates', 'notify:watch']
            }
        },
        notify: {
            watch: {
                options: {
                    title: 'Task Complete',
                    message: 'Sources compiled'
                }
            }
        }
    });
    grunt.registerTask('build', [
        'clean',
        'concat:frontend',
        'copy',
        'ngtemplates',
        'less'
    ]);

    grunt.registerTask('dev', ['build', 'watch']);
    grunt.registerTask('default', ['build']);
};