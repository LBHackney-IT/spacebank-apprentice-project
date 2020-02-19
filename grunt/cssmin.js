module.exports = {
    build : {
        options : {
            debug               : false,
            keepSpecialComments : 0,
            processImport       : false
        },
        files   : {
            '<%= paths.asset_base %>/main.css'       : '<%= paths.asset_base %>/main.css'
        }
    }
};