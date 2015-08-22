module.exports = function(grunt){

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    csscomb: {
      style: {
        expand: true,
        src: ["static/less/**/*.less"]
      }
    },
    svgstore: {
      options: {},
      default : {
        files: {
          'static/img/dest.svg': ['static/img/**/*.svg']
        }
      }
    },
    less: {
      style: {
        files: {
          "static/css/style.css": ["static/less/style.less"]
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ["last 2 versions", "ie 10"]
      },
      files: {
        src: "static/css/style.css"
      }
    },
    cmq: {
      style: {
        files: {
          "static/css/style.css": ["static/css/style.css"]
        }
      }
    },
    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0,
          report: "gzip"
        },
        files: {
          "static/css/style.min.css": ["static/css/style.css"]
        }
      }
    },
    concat: {
      script: {
        src: ["static/js/main.js"],
        dest: "static/js/script.js"
      }
    },
    uglify: {
      options: {
        report: "gzip"
      },
      script: {
        src: "static/js/script.js",
        dest: "static/js/script.min.js"
      }
    },
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      style: {
        files: ["static/less/**/*.less"],
        tasks: ["less", "autoprefixer", "cmq", "cssmin"]
      },
      script: {
        files: ["static/js/**/*.js"],
        tasks: ["concat", "uglify"]
      }
    }
  });

  //grunt.registerTask("default", [
  //  "less",
  //  "autoprefixer",
  //  "cmq",
  //  "cssmin",
  //  "concat",
  //  "uglify"
  //]);
};
