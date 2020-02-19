// CONCAT ORDER FOR BUILDING MAIN.JS, WITH / WITHOUT MOCKS
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

module.exports = {
    options: {
        sourceMap: IS_DEVELOPMENT
    },
    dest  : 'build/<%= paths.asset_base %>/main.js',
    files : [
            '*.js'       
    ]
};