
const { src, dest, series, watch } = require(`gulp`),
    babel = require(`gulp-babel`),
    htmlValidator = require(`gulp-htmlmin`),
    cssValidator = require(`gulp-clean-css`),
    jsCompressor = require(`gulp-uglify`),
    jsValidator = require(`gulp-eslint`),
    browserSync = require(`browser-sync`)
    reload = browserSync.reload;

let browserChoice = `default`;

let compressCSS = () => {
    return src([`dev/css/*.css`,`dev/css/**/*.css`])
        .pipe(htmlValidator({collapseWhitespace: true}))
        .pipe(dest(`prod/css`));
};

let validateCSS = () => {
    return src([
        `dev/css/*.css`,
        `dev/css/**/*.css`])
        .pipe(cssValidator(undefined));
}

let validateHTML = () => {
    return src([
        `dev/html/*.html`,
        `dev/html/**/*.html`])
        .pipe(htmlValidator(undefined));
};

let validateJS = () => {
    return src([
        `dev/js/*.js`,
        `dev/js/**/*.js`])
        .pipe(jsValidator())
        .pipe(jsValidator.formatEach(`compact`));
};

let compileCSSForDev = () => {
    return src(`dev/styles/scss/main.scss`)
        .pipe(sass.sync({
            outputStyle: `expanded`,
            precision: 10
        }).on(`error`, sass.logError))
        .pipe(dest(`temp/styles`));
};

let transpileJSForDev = () => {
    return src(`dev/scripts/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/scripts`));
};

let compressHTML = () => {
    return src([`dev/html/*.html`,`dev/html/**/*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let transpileJSForProd = () => {
    return src(`dev/scripts/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/scripts`));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        browser: browserChoice,
        server: {
            baseDir: [
                `temp`,
                `dev`,
                `dev/html`
            ]
        }
    });

    watch(`dev/html/*.html`, validateHTML).on(`change`, reload);
    watch(`dev/css/*.css`, validateCSS).on(`change`, reload);
    watch(`dev/js/*.js`, series(validateJS, transpileJSForDev)).on(`change`, reload);
};



exports.validateHTML = validateHTML;
exports.validateCSS = validateCSS;
exports.validateJS = validateJS;
exports.compileCSSForDev = compileCSSForDev;
exports.transpileJSForDev = transpileJSForDev;
exports.compressHTML = compressHTML;
exports.compressCSS = compressCSS;
exports.transpileJSForProd = transpileJSForProd;
exports.serve = series(
    validateHTML,
    validateCSS,
    validateJS,
    transpileJSForDev,
    serve
);
exports.build = series(
    compressHTML,
    transpileJSForProd,
);