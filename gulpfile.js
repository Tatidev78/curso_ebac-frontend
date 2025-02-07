// Importar o pacote do gulp que instalamos
const gulp = require('gulp');
// Importar pacote do gulp-sass
const sass= require('gulp-sass')(require('sass'));
// Importar pacote sourcemaps
const sourcemaps = require('gulp-sourcemaps');
// Importar pacote para minificar JavaScript
const uglify = require('gulp-uglify');
// Importar pacote para compressão de imagens
const imagemin = require('gulp-imagemin');

//função para compilar SASS
function compilaSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

// Função para comprimir JavaScript
function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}

//funçaõ para comprimir imagens
function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}


// Função para assistir mudanças nos arquivos
function watchFiles() {
    gulp.watch('./source/styles/*.scss', compilaSass);
    gulp.watch('./source/scripts/*.js', comprimeJavaScript);
    gulp.watch('./source/images/*', comprimeImagens);
}
// Exportar as funções
exports.default = gulp.series(
    gulp.parallel(compilaSass, comprimeJavaScript, comprimeImagens),
    watchFiles
);

exports.sass = compilaSass;
exports.javascript = comprimeJavaScript;
exports.imagemin = comprimeImagens;
exports.watch = watchFiles;


