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
        	'js/jquery-3.5.1.js',
        	'js/js-cookies.js',
        	'js/replace-text.js',
        	'<%= pkg.bootstrapJs %>/transition.js',
        	'<%= pkg.bootstrapJs %>/collapse.js',
        	'<%= pkg.bootstrapJs %>/tab.js',
        	'<%= pkg.bootstrapJs %>/modal.js',
          '<%= pkg.bootstrapJs %>/tooltip.js',
          '<%= pkg.bootstrapJs %>/popover.js',
          '<%= pkg.bootstrapJs %>/affix.js',
          '<%= pkg.bootstrapJs %>/dropdown.js',
          '<%= pkg.bootstrapJs %>/carousel.js',
          '<%= pkg.bootstrapJs %>/alert.js',
        	'js/84000.js',
        	'js/ie10-viewport-bug-workaround.js'
       	],
        dest: 'js/<%= pkg.name %>.min.js'
      }
    },
    less: {
  		comms: {
  			options: {
  		    compress: true
  		  },
  			files: {
  				'css/84000-comms.css': 'less/bootstrap-comms.less'
  			}
  		},
      readingRoom: {
        options: {
          compress: true
        },
        files: {
          'css/84000-reading-room.css': 'less/bootstrap-reading-room.less'
        }
      },
      utilities: {
        options: {
          compress: true
        },
        files: {
          'css/84000-utilities.css': 'less/bootstrap-utilities.less'
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
        tasks: ['less:comms', 'less:readingRoom', 'less:utilities']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'less:comms', 'less:readingRoom', 'less:utilities', 'watch']);

};