import axios from 'axios';

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://dev-492185.okta.com/api/v1/groups/00g2444n5gRcr3wYT357/users/{{userId}}',
  headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json', 
    'Authorization': 'SSWS 00sk09yur49esaeH87VoX_OqYj9p9MJDaNRqHF_VK1', 
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
