var gulp=require('gulp');
var uglify= require('gulp-uglify');
var obfuscate=require('gulp-obfuscate');
var sass=require('gulp-sass');
var browserSync = require('browser-sync').create();

var rutas= {

	rutaJS: 'src/assets/js/*.js',
	rutaCSS: 'src/assets/css/main.css',
	rutaSCSS: 'src/assets/scss/main.scss',
	rutaHTML: 'src/index.html'
}

gulp.task('minificaJS', function(){
	gulp.src(rutas.rutaJS)
	.pipe(uglify())
	.pipe(obfuscate())
	.pipe(gulp.dest('public/js/*.js'));
})
gulp.task('compilaSCSS', function(){
	gulp.src(rutas.rutaSCSS)
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest('public/scss'))
})
gul.task('preparaHTML', function(){
	gulp.src(rutas.rutaHTML)
	.pipe()
})
gulp.task('actualizaCambios', function() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
});
gulp.watch(rutas.rutaJS), ['compilaSCSS'])

