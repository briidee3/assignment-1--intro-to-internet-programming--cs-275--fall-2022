const { src, dest, series, watch } = require(`gulp`),
    htmlCompressor = require(`gulp-htmlmin`),
    cssCompressor = require(`gulp-clean-css`),
    jsValidator = require(`gulp-eslint`),
    babel = require(`gulp-babel`),
    jsCompressor = require(`gulp-uglify`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;

let compressHTML = () => {
    return src(`dev/html/index.html`)
        .pipe(htmlCompressor({collpaseWhitespace: true}))
        .pipe(dest(`prod`));
}

let compressCSS = () => {
    return src(`dev/css/style.css`)
        .pipe(cssCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
}

let validateHTML = () => {
    return src(`dev/html/index.html`)
        .pipe(htmlValidator(undefined));
};

let validateCSS = () => {
    return src(`dev/css/style.css`)
        .pipe(cssValidator(undefined));
}


let validateJS = () => {
    return src(`dev/js/app.js`)
    .pipe(jsValidator())
    .pipe(jsValidator.formatEach(`compact`));
};

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

exports.validateHTML = validateHTML;
exports.validateCSS = validateCSS;
exports.validateJS = validateJS;
exports.compressHTML = compressHTML;
exports.compressCSS = compressCSS;
exports.transpileJSForDev = transpileJSForDev;
exports.transpileJSForProd = transpileJSForProd;
exports.serve = serve;
exports.build = series(
    validateHTML,
    validateCSS,
    compressHTML,
    compressCSS,
    transpileJSForProd,
);