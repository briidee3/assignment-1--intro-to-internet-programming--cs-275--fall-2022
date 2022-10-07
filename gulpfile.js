const { src, dest, series, watch } = require(`gulp`),
    htmlCompressor = require(`gulp-htmlmin`),
    cleanCSS = require('gulp-clean-css');
    jsLinter = require(`gulp-eslint`),
    babel = require(`gulp-babel`),
    jsCompressor = require(`gulp-uglify`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;

let browserChoice = `default`;

let validateHTML = () => {
    return src([
        `dev/html/*.html`,
        `dev/html/**/*.html`])
        .pipe(htmlValidator(undefined));
};

let compressHTML = () => {
    return src([`dev/html/*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};


let compressCSS = () => {};
let validateJS = () => {};
let transpileJSForDev = () => {};
let transpileJSForProd = () => {};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        server: {
            baseDir: `./`
        }
    });

    watch(`dev/html/*.html`, validateHTML).on(`change`, reload);
    watch(`dev/css/*.css`, validateCSS).on(`change`, reload);
    watch(`dev/js/*.js`, series(validateJS, transpileJSForDev)).on(`change`, reload);
};

exports.default = serve;