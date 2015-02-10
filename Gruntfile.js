module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),
    properties: grunt.file.readJSON('properties.json'),

    banner: '/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2010-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',

    /* clean directories */
    clean: ['<%= properties.dist %>'],

    /* concat files */
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      basic_and_extras: {
        files: {
           "<%= properties.dist %>/<%= pkg.name %>.js" : ['<%= pkg.name %>.js']
        },
      },
    },

    jshint: {
      all: ['Gruntfile.js', '<%= properties.dist %>/<%= pkg.name %>.js']
    },

    /* js file minification */
    uglify: {
      options: {
        preserveComments: false
      },
      build: {
        files: {
          '<%= properties.dist %>/<%= pkg.name %>.min.js': ['<%= properties.dist %>/<%= pkg.name %>.js']
        }
      }
    },

    /* commit on gh-pages github */
    'gh-pages': {
      options: {
        base: 'test/',
        message: 'auto-generated commit'
      },
      src: ['**/*']
    },

    /* update bower json */
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: ['pkg'],
        commit: true,
        commitFiles: ['-a'], // all Files
        push: true,
        pushTo: 'origin'
      }
    }

	});

	// Loading dependencies
  for (var key in grunt.file.readJSON('package.json').devDependencies) {
    if (key !== 'grunt' && key.indexOf('grunt') === 0) {
      grunt.loadNpmTasks(key);
    }
  }

	// tasks
  grunt.registerTask('build', [
    'clean',
    'concat',
    'jshint',
    'uglify'
  ]);

  grunt.registerTask('ghpages', [
    'clean',
    'concat',
    'uglify',
    'jshint',
    'gh-pages'
  ]);

  grunt.registerTask('deploy', [
    'clean',
    'concat',
    'jshint',
    'uglify',
    'gh-pages',
    'bump'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
