require('es6-promise').polyfill();
require('isomorphic-fetch');

function sendMail(to,subject,html){
    let formData = new FormData();
    
    formData.append('to', to);
    formData.append('subject', subject);
    formData.append('html', html);

    fetch('http://06a1cf11.ngrok.io/mail', {
        method: 'post',
        body: formData
      })
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.text();
    })
    .then(function(response) {
        console.log('mail sent successfully');
    });
}

module.exports={
    sendMail
}