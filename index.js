function iterativeLog(array){
  array.forEach(function callback(element, index, array){
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  array=[1,2];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback){
  array.forEach(callback);
}
