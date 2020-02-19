var IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

module.exports = {
    build : {
        options : {
            sourceMap: IS_DEVELOPMENT,
            sourceMapFileInline: IS_DEVELOPMENT
        },
        files   : {
            "<%= paths.asset_base %>/main.css": "src/scss/main.scss"
        }
    }
};
