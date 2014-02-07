module.exports = function(grunt) {

  var pkgFile = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkgFile,
    amd_tamer: {
      options: {
        base: 'src/'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'js/app.js'
      }
    },
    clean: ['js'],
    uglify: {
      production: {
        files: {
          'js/app.min.js': 'js/app.js'
        }
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', 'Default task', ['clean', 'amd_tamer', 'uglify']);

};
