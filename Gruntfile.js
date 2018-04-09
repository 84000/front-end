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
          '<%= pkg.bootstrapJs %>/tooltip.js',
          '<%= pkg.bootstrapJs %>/popover.js',
          '<%= pkg.bootstrapJs %>/affix.js',
        	'js/84000.js',
        	'js/ie10-viewport-bug-workaround.js'
       	],
        dest: 'js/<%= pkg.name %>.min.js'
      }
    },
    less: {
  		wordpress: {
  			options: {
  		    compress: true
  		  },
  			files: {
  				'css/84000-wordpress.css': 'less/bootstrap-wordpress.less'
  			}
  		},
      readingRoom: {
        options: {
          compress: true
        },
        files: {
          'css/84000-reading-room.css': 'less/bootstrap-reading-room.less'
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
        tasks: ['less:wordpress', 'less:readingRoom']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'less:wordpress', 'less:readingRoom', 'watch']);

};