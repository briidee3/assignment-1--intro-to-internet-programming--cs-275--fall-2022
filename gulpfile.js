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
    watch(`index.html`).on(`change`, reload);
};

exports.serve = serve;