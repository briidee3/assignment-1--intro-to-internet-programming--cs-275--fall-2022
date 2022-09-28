const { src, dest, series, watch } = require(`gulp`),
    CSSLinter = require(`gulp-stylelint`),
    del = require(`del`),
    babel = require(`gulp-babel`),
    htmlCompressor = require(`gulp-htmlmin`),
    htmlValidator = require(`gulp-html`),
    imageCompressor = require(`gulp-image`),
    jsCompressor = require(`gulp-uglify`),
    jsLinter = require(`gulp-eslint`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;

let compressHTML = () => {};
let compressCSS = () => {};
let validateJS = () => {};
let transpileJSForDev = () => {};
let transpileJSForProd = () => {};
let serve = () => {};

watch(`dev/html/*.html`, validateHTML).on(`change`, reload);
watch(`dev/css/*.css`, validateCSS).on(`change`, reload);
watch(`dev/js/*.js`, series(validateJS, transpileJSForDev)).on(`change`, reload);