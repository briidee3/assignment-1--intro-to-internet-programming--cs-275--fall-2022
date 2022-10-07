const { watch, src, dest, series } = require(`gulp`),
    babel = require(`gulp-babel`),
    htmlValidator = require(`gulp-htmlmin`),
    jsCompressor = require(`gulp-uglify`),
    jsValidator = require(`gulp-eslint`),
    browserSync = require(`browser-sync`),
    cssValidator = require(`gulp-clean-css`),
    reload = browserSync.reload;

let validateHTML = () => {
    return src(`dev/html/index.html`)
        .pipe(cssValidator(undefined));
}

let validateCSS = () => {
    return src(`dev/css/style.css`)
        .pipe(htmlValidator(undefined));
}

let compressHTML = () => {
    return src(`dev/html/index.html`)
        pipe(htmlCompressor({collapseWhitespace: true}))
}

let compressCSS = () => {
    return src(`dev/css/style.css`)
        .pipe(jsCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
}


let validateJS = () => {
    return src(`dev/js/app.js`)
        .pipe(jsValidator())
        .pipe(dest(`temp/scripts`));
}

let transpileJSForDev = () => {
    return src(`dev/js/app.js`)
        .pipe(babel())
        .pipe(dest(`temp/scripts`));
}

let transpileJSForProd = () => {
    return src(`dev/js/app.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/scripts`));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        server: {
            baseDir: [
                `temp`,
                `dev/html`,
                `dev`
            ]
        }
    });

    watch(`dev/html/*.html`, validateHTML).on(`change`, reload);
    watch(`dev/css/*.css`, validateCSS).on(`change`, reload);
    watch(`dev/js/*.js`, series(validateJS, transpileJSForDev)).on(`change`, reload);
};

exports.default = serve;
exports.validateCSS = validateCSS;
exports.validateJS = validateJS;
exports.transpileJSForDev = transpileJSForDev;
exports.compressHTML = compressHTML;
exports.compressCSS = compressCSS; 
exports.transpileJSForProd = transpileJSForProd;
exports.serve = serve; 
exports.build = series(
    validateHTML,
    validateJS,
    transpileJSForDev,
    serve
)