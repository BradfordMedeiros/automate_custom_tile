
const mqtt = require('mqtt');

const fetch = require('isomorphic-fetch');
if (window.fetch === undefined) {
  window.fetch = fetch;
}


console.log('ip address is: ', window.ip_address);

/*
 injected into script should be
 automate: {
   ip_address: <ip address only>,
   mqtt_url: <ip address + protocol>,
 }

 */

if (typeof(automate) !== typeof({})){
  throw (new Error('automate object not defined'));
}

if (!automate || typeof(automate.ip_address) !== typeof('')){
  throw (new Error('automate.ip_address not defined'));
}

if (!automate || typeof(automate.mqtt_url) !== typeof('')){
  throw (new Error('automate.mqtt_url not defined'));
}

automate.mqtt = mqtt;
automate.getEnv = function(env) {
  if  (typeof(env) !== typeof('')){
    throw (new Error('env must be defined as string'));
  }
};

automate.setEnv = function (env, value) {
  if (typeof('env') !== typeof('')){
    throw (new Error('env must be defined as string'));
  }
  if (typeof('value') !== typeof('')){
    throw (new Error('value must be defined as string'));
  }
};

