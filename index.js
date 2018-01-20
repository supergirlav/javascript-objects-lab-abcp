var recipes = {key: 'value'}


function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign ({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  Object[key] = value;
  return object; 
}
 