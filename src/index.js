const mqtt = require('mqtt');

const fetch = require('isomorphic-fetch');
if (window.fetch === undefined) {
  window.fetch = fetch;
}

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

var automate_env_url = 'http://' + automate.ip_address + ':9000/env/';

automate.getEnv = function(env) {
  if  (typeof(env) !== typeof('')){
    throw (new Error('env must be defined as string'));
  }

  return new Promise(function(resolve, reject) {
    var url = automate_env_url + env;
    fetch(url).then(function(response){
      response.text().then(resolve).catch(reject);
    }).catch(reject);
  });
};

automate.setEnv = function (env, value) {
  if (typeof('env') !== typeof('')){
    throw (new Error('env must be defined as string'));
  }
  if (typeof('value') !== typeof('')){
    throw (new Error('value must be defined as string'));
  }

  return new Promise(function(resolve, reject) {
    var url = automate_env_url + env + '/' + value;
    fetch(url, {
      method: 'POST',
    }).then(function(response){
      response.text().then(resolve).catch(reject);
    }).catch(reject);
  });
};

