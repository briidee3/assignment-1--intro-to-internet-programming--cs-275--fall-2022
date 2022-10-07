const { src, dest, series, watch } = require(`gulp`),
    htmlCompressor = require(`gulp-htmlmin`),
    validateCSS = require('gulp-clean-css');
    jsLinter = require(`gulp-eslint`),
    babel = require(`gulp-babel`),
    jsCompressor = require(`gulp-uglify`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;

let browserChoice = `default`;

async function chrome () {
    browserChoice = `google chrome`;
}

let validateHTML = () => {
    return src([
        `dev/html/*.html`,
        `dev/html/**/*.html`])
        .pipe(htmlCompressor(undefined));
};

let compressHTML = () => {
    return src([
        `dev/html/*.html`,
        `dev/html/**/*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let valCSS = () => {
    return src([
        `dev/css/*.css`,
        `dev/css/**/*.css`])
        .pipe(validateCSS(undefined));
};

let compressCSS = () => {
    return src([`dev/css/*.css`,`dev/css/**/*.css`])
        .pipe(validateCSS({collapseWhitespace: true}))
        .pipe(dest(`prod/css`));
}

let validateJS = () => {
    return src([`dev/js/*.js`, `dev/js/**/*.js`])
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`));
};

let transpileJSForDev = () => {
    return src(`dev/scripts/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/scripts`));
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
}

exports.chrome = series(chrome, serve);
exports.validateHTML = validateHTML;
exports.compressCSS = compressCSS;
exports.validateCSS = validateCSS;
exports.compressHTML = compressHTML;
exports.validateJS = validateJS;
exports.transpileJSForDev = transpileJSForDev;
exports.transpileJSForProd = transpileJSForProd;
exports.serve = series(
    validateHTML,
    validateCSS,
    validateJS,
    transpileJSForDev,
    serve
);

exports.default = serve;

