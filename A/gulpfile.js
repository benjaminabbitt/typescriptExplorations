var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');

var locations = {
    sources: ["src/**/*.ts"],
    tsConfig: './tsconfig.json',
    dist: 'dist/'
};

gulp.task('compile', function () {
    var tsProject = ts.createProject(locations.tsConfig);
    var tsResult = gulp.src(locations.sources,  { base: './src' })
        .pipe(ts(tsProject));

    return merge([
        tsResult.dts.pipe(gulp.dest(locations.dist)),
        tsResult.js.pipe(gulp.dest(locations.dist))
    ]);
});

gulp.task('default', ['compile'], function () {
});
