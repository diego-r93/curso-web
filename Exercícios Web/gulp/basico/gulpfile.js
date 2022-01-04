const gulp = require('gulp')

gulp.task('default', () => {
   gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
   console.log('Copiar!!!')
})

gulp.task('antes1', () => {
   console.log('Antes1!!!')
})

gulp.task('antes2', () => {
   console.log('Antes2!!!')
})

gulp.task('antes2', () => {
   console.log('Fim!!!')
})