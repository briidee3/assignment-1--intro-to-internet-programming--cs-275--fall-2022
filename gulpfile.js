const { src, dest, series, watch } = require(`gulp`),
    babel = require(`gulp-babel`),
    htmlCompressor = require(`gulp-htmlmin`),
    htmlValidator = require(`gulp-html`),
    imageCompressor = require(`gulp-image`),
    jsCompressor = require(`gulp-uglify`),
    jsLinter = require(`gulp-eslint`),
    sass = require(`gulp-sass`)(require(`sass`)),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;

    let validateHTML = () => {
        return src([
            `dev/html/*.html`,
            `dev/html/**/*.html`
            `dev`])
            .pipe(htmlValidator(undefined));
    };

    let compressHTML = () => {
        return src([`dev/html/*.html`,`dev/html/**/*.html`])
            .pipe(htmlCompressor({collapseWhitespace: true}))
            .pipe(dest(`prod`));
    };

    let lintJS = () => {
        return src(`dev/scripts/*.js`)
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

    let compileCSSForDev = () => {
        return src(`dev/styles/scss/main.scss`)
            .pipe(sass.sync({
                outputStyle: `expanded`,
                precision: 10
            }).on(`error`, sass.logError))
            .pipe(dest(`temp/styles`));
    };



    let serve = () => {
        browserSync({
            notify: true,
            reloadDelay: 50,
            browser: browserChoice,
            server: {
                baseDir: [
                    `temp`,
                    `dev`
                ]
            }
        });
    
        watch(`dev/scripts/*.js`, series(lintJS, transpileJSForDev))
            .on(`change`, reload);
    
        watch(`dev/styles/scss/**/*.scss`, compileCSSForDev)
            .on(`change`, reload);
    
        watch(`dev/html/**/*.html`, validateHTML)
            .on(`change`, reload);
    
        watch(`dev/img/**/*`)
            .on(`change`, reload);
    };
    
exports.validateHTML = validateHTML;
exports.compileCSSForDev = compileCSSForDev;
exports.lintJS = lintJS;
exports.transpileJSForDev = transpileJSForDev;
exports.compressHTML = compressHTML;
exports.compileCSSForProd = compileCSSForProd;
exports.transpileJSForProd = transpileJSForProd;
exports.compressImages = compressImages;
exports.copyUnprocessedAssetsForProd = copyUnprocessedAssetsForProd;
exports.clean = clean;
exports.default = listTasks;
exports.lintCSS = lintCSS;
exports.serve = series(
    validateHTML,
    compileCSSForDev,
    lintJS,
    transpileJSForDev,
    serve
);
exports.build = series(
    compressHTML,
    compileCSSForProd,
    transpileJSForProd,
        );
