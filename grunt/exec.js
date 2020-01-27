module.exports = function (grunt) {
    var UPDATE_ASSETS_CMD;

    if (process.platform === 'win32') {
        UPDATE_ASSETS_CMD = "xcopy /e /i _ui build\\_ui /Y";
    } else {
        UPDATE_ASSETS_CMD = "rsync -ru _ui build";
    }

    return {
        "updateAssets"                : UPDATE_ASSETS_CMD
    };
};