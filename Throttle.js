const throttle = (fn, t) => {
  let interval = null;   
  let queuedArgs = null; 

  const processArgs = () => {
    if (queuedArgs === null) {
      clearInterval(interval);
      interval = null;         
    } else {
      fn(...queuedArgs); 
            queuedArgs = null; 
    }
  };

  return (...args) => {
    if (interval) {
      queuedArgs = args; 
         } else {
      fn(...args);                 
      interval = setInterval(processArgs, t); 
    }
  };
};
