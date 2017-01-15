var t1 = function(amount){
  console.log('got amount: ' + amount);
  return amount*1.5;
}

var cache = function(func){
  var values = {};
  return function(amount){
    if(!values[amount]){
      values[amount] = func(amount);
    }
    return values[amount];
  };
}

var cachedt1 = cache(t1);

console.log(cachedt1(200));
console.log(cachedt1(200));
