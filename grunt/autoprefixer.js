module.exports = {
    options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
    },
    main: {
        expand: true,
        flatten: true,
        src: 'dist/css/*.css',
        dest: 'dist/css'
    }
};