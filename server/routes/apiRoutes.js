module.exports = function (app) {
    var nodemailer = require('nodemailer');
    var multiparty = require('connect-multiparty');
    var multipartyMiddleware = multiparty();
    var pug = require("pug");
    // var path = __dirname +'/../views/partials/email';
    /**************************************************************************************************
     * require Controller
     **************************************************************************************************/

    /**************************************************************************************************
     * API get routes
     **************************************************************************************************/
/*
    //blobLoc
    app.get('/api/frontend/getBlobLoc', function (req, res) {
        res.json({success: true, blobLoc: blobUrl});
    });*/
/*
    app.post('/api/postContactForm', multipartyMiddleware, function (req, res) {
        var messageTemplate = pug.compileFile(path + "/anfrageMailTemplate.pug")({
            form : req.body.form
        });
        var transporter = nodemailer.createTransport({
            host: 'email-smtp.us-west-2.amazonaws.com',
            port: 587,
            secure: false,
            auth:{
                user: 'AKIAIFY4IPWFTOTIXQYA',
                pass: 'AlRGcz5nCsnRLBmqFmpONFGwieJt8W2RJH3e7nYHmgVV'
            }
        });
        var fileArray =[];
        if (req.files.file) {
            req.files.file.forEach(function (file) {
                var f = {};
                f.filename = file.name;
                f.path = file.path;
                fileArray.push(f);
            });
        }

        var mailOptions = {
            from: 'test@konzepthaus-ws.de',
            to: 'info@konzepthaus-ws.de',
            subject: 'Anfrage/Angebot von ' + req.body.form.firmenname,
            html: messageTemplate,
            attachments: fileArray
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.error(error);
                res.json({success: false, message: "Beim Versand der Nachricht traten Probleme auf. " +
                    "Bitte versuchen Sie es zu einem anderen Zeitpunkt erneut"});
            } else {
                console.log('Nachricht versendet:', info);
                res.json({success: true, message:"Ihre Anfrage wurde erfolgreich versendet!"});
            }
        });
    });*/
};