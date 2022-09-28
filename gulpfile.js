let compressHTML = () => {};
let compressCSS = () => {};
let validateJS = () => {};
let transpileJSForDev = () => {};
let transpileJSForProd = () => {};
let serve = () => {};

watch(`dev/html/*.html`, validateHTML).on(`change`, reload);
watch(`dev/css/*.css`, validateCSS).on(`change`, reload);
watch(`dev/js/*.js`, series(validateJS, transpileJSForDev)).on(`change`, reload);