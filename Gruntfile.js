module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      face: {
        src: ["src/js/face/three.js", "src/js/face/anime.js", "src/js/face/runtime.js", "src/js/face/face.js"],
        dest: "src/js/faceApp.js",
      },
      first: {
        src: ["src/js/first/jquery.min.js", "src/js/first/index.js"],
        dest: "src/js/first.js",
      },
      end: {
        src: [
          "src/js/end/typewriter.js",
          "src/js/end/writeBio.js",
          "src/js/end/faceModal.js",
          "src/js/end/nameAnim.js",
        ],
        dest: "src/js/end.js",
      },
      css: {
        src: [
          "src/css/fonts.css",
          "src/css/index.css",
          "src/css/navbar.css",
          "src/css/sidebars.css",
          "src/css/name.css",
          "src/css/bio.css",
          "src/css/projects.css",
          "src/css/contact.css",
        ],
        dest: "src/css/main.css",
      },
    },
    uglify: {
      face: {
        src: "src/js/faceApp.js",
        dest: "src/js/faceApp.min.js",
      },
      first: {
        src: "src/js/first.js",
        dest: "src/js/first.min.js",
      },
      end: {
        src: "src/js/end.js",
        dest: "src/js/end.min.js",
      },
      matomo: {
        src: "src/js/omotam.js",
        dest: "src/js/omotam.min.js",
      },
    },
    cssmin: {
      css: {
        src: "src/css/main.css",
        dest: "src/css/main.min.css",
      },
    },
    htmlmin: {
      index: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {
          "src/index.html": "index.html",
        },
      },
    },
    watch: {
      scripts: {
        files: ["src/index.html", "src/js/*.js", "src/js/end/*.js", "src/css/*.css"],
        tasks: ["concat", "uglify", "cssmin", "htmlmin"],
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

  grunt.registerTask("default", ["concat", "uglify", "cssmin", "htmlmin", "watch"]);
};
