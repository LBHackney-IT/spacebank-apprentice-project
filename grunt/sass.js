const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
const sass = require('node-sass');

module.exports = {
    build : {
        options : {
            implementation: sass,
            sourceMap: IS_DEVELOPMENT,
            sourceMapFileInline: IS_DEVELOPMENT
        },
        files   : {
            "<%= paths.asset_base %>/main.css": "src/scss/main.scss"
        }
    }
};
