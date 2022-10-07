var axios = require("axios").default;
const qs = require('qs');
https = require('node:https');

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
const instance = axios.create({
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
  });

let count = 0
const execute =async () =>{

    const TxtPassword = Math.floor(1000 + Math.random() * 9000);
    const TxtUsername = makeid(Math.floor(0 + Math.random() * 10))

    const data = qs.stringify({
        'action': 'AddVictimLogin',
        'TxtUsername': TxtUsername,
        'TxtPassword' :TxtPassword
      });
    while (true){
        await instance.post("https://ap2fws723gubed68wi3e2g38col3g86tdg.digital/p4n3l/data.php",{
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded','Origin': 'https://ap2fws723gubed68wi3e2g38col3g86tdg.digital'},
            data
        }).then(function (response) {
            console.log("code Status",cresponse.status);
          }).catch(function (error) {
            console.error(error);
          });

          count += 1

          console.log("attacks count",count)

    }

}

execute()


