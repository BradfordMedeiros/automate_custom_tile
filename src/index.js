
import mqtt from 'mqtt';
import fetch from 'isomorphic-fetch';

console.log('ip address is: ', window.ip_address);

if (typeof(window.ip_address) !== typeof('')){
  throw (new Error('ip address not defined'));
}

window.mqtt = mqtt;
window.fetch = fetch;



