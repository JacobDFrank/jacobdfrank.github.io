var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    babel = require('gulp-babel'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    glslify = require('glslify')

gulp.task('default', function() {

    var b = browserify({
        entries: './js/index.js',
        transform: ["glslify"]
    })

    // bundle all our file into one file
    // conerts it to a node.js stream
    b.bundle()
        // convert node.js stream to vinyl stream
        .pipe( source('app.js'))
        // convert from chunked stream to buffered stream
        .pipe( buffer())
        // .pipe(glslify())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(notify({
            message: 'build complete.',
            onLast: true
        }))
})

gulp.task('watch', function() {
    gulp.watch('./js/**.js', function() {
        gulp.run('default')
    })
})
