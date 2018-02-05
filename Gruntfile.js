module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        stripBanners: false
      },
      build: {
        src: [
        	'js/jquery-3.3.1.js',
        	'js/js-cookies.js',
        	'js/replace-text.js',
        	'<%= pkg.bootstrapJs %>/transition.js',
        	'<%= pkg.bootstrapJs %>/collapse.js',
        	'<%= pkg.bootstrapJs %>/tab.js',
        	'<%= pkg.bootstrapJs %>/modal.js',
        	'js/84000.js',
        	'js/ie10-viewport-bug-workaround.js'
       	],
        dest: 'js/<%= pkg.name %>.min.js'
      }
    },
    less: {
  		development: {
  			options: {
  		    	compress: true
  		    },
  			files: {
  				'css/84000.css': 'less/bootstrap.less'
  			}
  		}
    },
    watch: {
      scripts: {
        files: 'js/84000.js',
        tasks: 'uglify'
      },
      less: {
        files: 'less/**/*.less',
        tasks: 'less'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'less:development', 'watch']);

};