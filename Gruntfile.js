const GRUNT_CONFIG = {
    data : {
        paths : {
            src        : 'src',
            build      : 'build',
            asset_base : './assets/'
        }
    }
};

module.exports = function (grunt) {
    require('load-grunt-config')(grunt, GRUNT_CONFIG);
};
