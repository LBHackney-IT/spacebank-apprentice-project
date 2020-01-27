module.exports = {
    options : {
        map        : {
            inline     : false, // save all sourcemaps as separate files...
            annotation : "<%= paths.asset_base %>/" // ...to the specified directory
        },
        processors : [
            require('autoprefixer')({
                Browserslist : ['Chrome >=48', 'Firefox >=44', 'Explorer >=9', 'Safari >9.0.3', 'iOS >=6', 'Android >=4']
            })
        ]
    },
    dist    : {
        src : "<%= paths.asset_base %>/*.css"
    }
};