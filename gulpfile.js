'use strict';

var gulp                = require('gulp'),
    watch               = require('gulp-watch'),
    prefixer            = require('gulp-autoprefixer'),
    uglify              = require('gulp-uglify'),
    sass                = require('gulp-sass'),
    sourcemaps          = require('gulp-sourcemaps'),
    rigger              = require('gulp-rigger'),
    cssmin              = require('gulp-minify-css'),
    imagemin            = require('gulp-imagemin'),
    pngquant            = require('imagemin-pngquant'),
    rimraf              = require('rimraf'),
    browserSync         = require("browser-sync").create(),
    reload              = browserSync.reload;

var path = {
    build: {
        html:           'build/',
        js:             'build/js/',
        css:            'build/css/',
        img:            'build/images/',
        fonts:          'build/fonts/',
        foundation_css: 'src/css/foundation'
    },
    foundation: {
        foundationSCSS: 'dist/css',//'src/css/',
        foundationJS:   'src/js/'
    },
    src: {
        html:           'src/*.html',
        js:             'src/js/main.js',
        style:          'src/sass/**/*.scss', //'src/sass/style.scss',
        img:            'src/images/**/*.*',
        foundationSCSS: 'node_modules/foundation-sites/assets/*.scss',
        foundationJS:   'node_modules/foundation-sites/js/**/*.js',
        fonts:          'src/fonts/**/*.*'
    },
    watch: {
        html:           'src/**/*.html',
        js:             'src/js/**/*.js',
        style:          'src/sass/**/*.scss',
        img:            'src/images/**/*.*',
        foundationSCSS: 'node_modules/foundation-sites/assets/*.scss',
        foundationJS:   'node_modules/foundation-sites/js/**/*.js',
        fonts:          'src/fonts/**/*.*'
    },
    clean:              './build'
};

var config = {
    server: {
        baseDir:        './src'
    },
    tunnel:             true,
    host:               'localhost',
    port:               9000,
    logPrefix:          "Frontend_MMW"
};

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer({
            browsers: ['last 400 versions', 'ie >= 9', 'and_chr >= 2.3'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('foundationSCSS:build', function () {
    gulp.src(path.src.foundationSCSS)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer({
            browsers: ['last 400 versions', 'ie >= 9', 'and_chr >= 2.3'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.foundation_css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('foundationJS:build', function () {
    gulp.src(path.src.foundationJS)
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.foundation.foundationJS))
        .pipe(reload({stream: true}));
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'image:build',
    'foundationSCSS:build',
    'foundationJS:build',
    'fonts:build'
]);

gulp.task('sass', function(){
    gulp.src(path.src.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.build.css))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', function(){
    // gulp.watch('src/sass/**/*.scss', ['sass']);
    // watch([path.watch.js], function(event, cb) {
    //     gulp.start('js:build');
    // });
    watch([path.watch.foundationSCSS], function(event, cb) {
        gulp.start('foundationSCSS:build');
    });

    // watch([path.watch.html], function(event, cb) {
    //     gulp.start('html:build')
    // });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build')
    });
    // watch([path.watch.foundationJS], function(event, cb) {
    //     gulp.start('foundationJS:build')
    // });
    // browserSync.init(config);
    // watch([path.watch.img], function(event, cb) {
    //     gulp.start('image:build');
    // });
    // watch([path.watch.fonts], function(event, cb) {
    //     gulp.start('fonts:build');
    // });
});