var nodemailer = require('nodemailer');

module.exports = function (message){

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'manuelromogreat@gmail.com',
          pass: '1231231581'
        }
      });
      
      var mailOptions = {
        from: 'manuelromogreat@gmail.com',
        to: 'hamzatatheer@gmail.com',
        subject: 'Notification From VentChat',
        text: message,
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}