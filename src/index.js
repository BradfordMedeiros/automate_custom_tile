
const mqtt = require('mqtt');
const fetch = require('isomorphic-fetch');

console.log('ip address is: ', window.ip_address);

if (typeof(window.ip_address) !== typeof('')){
  throw (new Error('ip address not defined'));
}

window.mqtt = mqtt;
window.fetch = fetch;



