// Browser-based preview task
module.exports = {
    "frontend" : {
        "options" : {
            "script" : "server.js",
            "port"   : process.env.PORT || 3000
        }
    }
};