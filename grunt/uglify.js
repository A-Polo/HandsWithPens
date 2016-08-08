module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: 'src/scripts',
      src: '**/*.js',
      dest: 'dist/js',
      ext: '.min.js'
    }]
  }
};