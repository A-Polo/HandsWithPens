module.exports = {
  // Настройки для разработки
  dev: {
    options: {
      outputStyle: 'compressed',
      sourceMap: true
    },
    files: [{
      expand: true,
      cwd: 'src/styles',
      src: ['*.sass'],
      dest: 'dist/css',
      ext: '.css'
    }]
  },
  // Настройки для продакшна
  prod: {
    options: {
      outputStyle: 'compressed',
      sourceMap: false
    },
    files: [{
      expand: true,
      cwd: 'src/styles',
      src: ['*.sass'],
      dest: 'dist/css',
      ext: '.css'
    }]
  }
};