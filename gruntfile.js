var nodeResolve = require("@rollup/plugin-node-resolve").default;

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    bake: {
      build: {
        files: {
          "build/html/index.html": "src/html/index.html",
        },
      },
    },
    rollup: {
      options: {
        format: "iife",
        sourceMap: true,
        map: true,
        plugins: function () {
          return [
            nodeResolve({
              module: true,
              jsnext: true,
              main: true,
              browser: true,
            }),
          ];
        },
      },
      files: {
        dest: "build/js/3d.js.bundle.tmp",
        src: "src/js/3d/3d.js",
      },
    },
    concat: {
      onLoad: {
        src: ["src/js/onLoad/*.js"],
        dest: "build/js/onload.js.concat.tmp",
      },
      afterRender: {
        src: ["src/js/afterRender/*.js"],
        dest: "build/js/afterRender.js.concat.tmp",
      },
      less: {
        src: ["src/less/*.less"],
        dest: "build/css/main.less.concat.tmp",
      },
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
          sourcemap: true,
        },
        files: {
          "build/css/main.css.build.tmp": "build/css/main.less.concat.tmp",
        },
      },
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require("tailwindcss")(),
          require("autoprefixer")(),
          require("postcss-combine-media-query")(),
          require("css-mqpacker")(),
        ],
      },
      dist: {
        src: "build/css/main.css.build.tmp",
      },
    },
    uglify: {
      onLoad: {
        src: "build/js/onload.js.concat.tmp",
        dest: "build/js/onload.js",
      },
      afterRender: {
        src: "build/js/afterRender.js.concat.tmp",
        dest: "build/js/afterRender.js",
      },
      threeD: {
        src: "build/js/3d.js.bundle.tmp",
        dest: "build/js/3d.js",
      },
    },
    cssmin: {
      css: {
        src: "build/css/main.css.build.tmp",
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
          "index.html": "build/html/index.html",
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
        files: ["src/**/*", "src/**/**/*"],
        tasks: ["bake", "rollup", "concat", "less", "postcss", "uglify", "cssmin", "htmlmin", "clean"],
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
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-http-server");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-bake");
  grunt.loadNpmTasks("grunt-rollup");

  grunt.registerTask("default", [
    "bake",
    "rollup",
    "concat",
    "less",
    "postcss",
    "uglify",
    "cssmin",
    "htmlmin",
    "clean",
    "http-server",
    "watch",
  ]);
};
