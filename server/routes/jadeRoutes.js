module.exports = function (app) {

    /********************************************************************************
     * FRONTEND
     *******************************************************************************/
    app.get('/404', function (req, res) {
        res.render('404');
    });

    app.get('/*', function (req, res) {
        res.render('index.pug', {
            min: process.env.NODE_ENV === 'production' ? ".min" : ""
        });
    });
};