module.exports = {

  // Настройки задач
  options: {
    limit: 3
  },

  // Задачи для разработки
  devFirst: [
    'jshint'
  ],
  devSecond: [
    'sass:dev',
    'uglify'
  ],

  // Задачи для продакшна
  prodFirst: [
    'jshint'

  ],
  prodSecond: [
    'sass:prod',
    'uglify'
  ],
  postProcessor: [
    'autoprefixer'
  ],


  // Image tasks
  imgFirst: [
    'imagemin'
  ]
};