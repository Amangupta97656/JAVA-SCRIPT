var jsonStringify = function(object) {
   if (typeof object === 'string') {
    return '"' + object.replace(/"/g, '\\"') + '"';
  }
   else if (typeof object === 'number' || typeof object === 'boolean' || object === null) {
       return String(object);
  }
    else if (Array.isArray(object)) {
    var arr = [];
      for (var i = 0; i < object.length; i++) {
      arr.push(jsonStringify(object[i]));
    }
    return '[' + arr.join(',') + ']';
  }
   else if (typeof object === 'object') {
    var keys = Object.keys(object);
    var obj = [];
     for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = jsonStringify(object[key]);
          obj.push('"' + key + '":' + value);
    }
    return '{' + obj.join(',') + '}';
  }
};