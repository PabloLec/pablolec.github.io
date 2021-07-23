module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      face: {
        src: ["src/js/three.js", "src/js/anime.js", "src/js/runtime.js", "src/js/face.js"],
        dest: "src/js/faceApp.js",
      },
      index: {
        src: ["src/js/jquery.min.js", "src/js/index.js"],
        dest: "src/js/main.js",
      },
      bio: {
        src: ["src/js/nameAnim.js", "src/js/typewriter.js", "src/js/writeBio.js"],
        dest: "src/js/bio.js",
      },
    },
    uglify: {
      face: {
        src: "src/js/faceApp.js",
        dest: "src/js/faceApp.min.js",
      },
      index: {
        src: "src/js/main.js",
        dest: "src/js/main.min.js",
      },
      bio: {
        src: "src/js/bio.js",
        dest: "src/js/bio.min.js",
      },
    },
    cssmin: {
      css: {
        src: "src/css/index.css",
        dest: "src/css/index.min.css",
      },
    },
    watch: {
      scripts: {
        files: ["src/js/*.js", "src/css/*.css"],
        tasks: ["concat", "uglify", "cssmin"],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["concat", "uglify", "cssmin", "watch"]);
};
