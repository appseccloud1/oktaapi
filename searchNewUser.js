import axios from 'axios';

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://dev-492185.okta.com/api/v1/logs?filter=eventType eq "user.lifecycle.create"',
  headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json', 
    'Authorization': 'SSWS 00sk09yur49esaeH87VoX_OqYj9p9MJDaNRqHF_VK1', 
  }
};


axios.request(config)
.then((response) => {
  //console.log(JSON.stringify(response.data));
  console.log(response.data[0].actor.id);
  console.log(response.data[0].actor.displayName);
  console.log(response.data[0].actor.alternateId);
})
.catch((error) => {
  console.log(error);
});

