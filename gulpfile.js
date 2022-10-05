const { watch } = require(`gulp`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        server: {
            baseDir: [
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