module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      js: {
        src: ["src/js/main.js"],
        dest: "build/js/main.js.concat.tmp",
      },
      css: {
        src: ["src/css/main.css"],
        dest: "build/css/main.css.concat.tmp",
      },
    },
    purgecss: {
      main: {
        options: {
          content: ["src/index.html", "src/js/**/*.js"],
        },
        files: {
          "build/css/main.css.purge.tmp": ["build/css/main.css.concat.tmp"],
        },
      },
    },
    uglify: {
      js: {
        src: "build/js/main.js.concat.tmp",
        dest: "build/js/main.js",
      },
    },
    cssmin: {
      css: {
        src: "build/css/main.css.purge.tmp",
        dest: "build/css/main.css",
      },
    },
    htmlmin: {
      index: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
        },
        files: {
          "index.html": "src/index.html",
        },
      },
    },
    clean: {
      tmp: ["build/**/*.tmp"],
    },
    "http-server": {
      dev: {
        root: ".",
        port: 8080,
        host: "0.0.0.0",
        showDir: true,
        autoIndex: true,
        runInBackground: true,
      },
    },
    watch: {
      scripts: {
        files: ["src/index.html", "src/js/*.js", "src/js/**/*.js", "src/css/*.css"],
        tasks: ["concat", "uglify", "cssmin", "htmlmin", "clean"],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-purgecss");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-http-server");

  grunt.registerTask("default", ["concat", "purgecss", "uglify", "cssmin", "htmlmin", "clean", "http-server", "watch"]);
};
