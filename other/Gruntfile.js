// Gruntfile.js


module.exports = (grunt) => {
  grunt.initConfig({
    execute: {
      target: {
        src: ['Scripts.js']
      }
    },
    watch: {
      scripts: {
        files: ['Scripts.js'],
        tasks: ['execute'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-execute');
};
