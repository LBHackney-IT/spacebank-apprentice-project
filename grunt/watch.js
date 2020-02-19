// Watches for changes to CSS or email templates then runs grunt tasks
module.exports = {
    options: {
      interval: 1000,
    },
    "changedCSS"       : {
        "files" : [
            "src/scss/**/*"
        ],
        "tasks" : [
            "build-css",
            "exec:updateAssets"
        ]
    },
    "changedJS"         : {
        "files" : [
            "src/js/**/*"
        ],
        "tasks" : [
            "build-js",
            "exec:updateAssets"
        ]
    },
    "changedTemplates"  : {
        "files" : [
            "src/templates/**/*"
        ],
        "tasks" : [
            "build-html"
        ]
    }
};
