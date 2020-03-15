// "use strict";

// const gulp = require('gulp')
// const sass = require('gulp-sass')

// // =============================================================+

// gulp.task('build', () => {
//     return gulp.src('./src/sass/*.scss')
//         .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//         .pipe(gulp.dest('./src/styles'));
// })

// gulp.task("sass", function () {
//     gulp.watch('./src/sass/*.scss', gulp.series("sass"));
// })

// // =============================================================+

// pm2 start my-app/node_modules/react-scripts/scripts/start.js --name "my-app"
// https://stackoverflow.com/questions/50885455/watch-sass-scss-and-nodemon-together