var gulp = require("gulp");
var ts = require("gulp-typescript");
var sass = require('gulp-sass');

gulp.task('typescript', function () {
    return gulp.src('./src/**/**/*.ts')
    .pipe(ts({
        noImplicitAny: true
    }))
    .pipe(gulp.dest('./src/'));
    
   
});


gulp.task('sass', function () {
    return gulp.src('./src/**/**/*.scss')
      .pipe(sass({
          outputStyle:'compact'
      }).on('error', sass.logError))
      .pipe(gulp.dest('./src/'));
});




gulp.task('watch', function () {
    var watcher = gulp.watch(['./src/**/**/*.scss','./src/**/**/*.ts'], ['typescript','sass']);
    
    watcher.on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['watch']);