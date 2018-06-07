module.exports = function (app,passport, Models) {

    require('./apiRoutes')(app, Models);
    require('./jadeRoutes')(app, Models);
};