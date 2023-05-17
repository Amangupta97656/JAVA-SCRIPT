var createCounter = function(init) {
    let temp = init;

    return {
        increment: () => ++init,
        decrement: () => --init,
        reset: () =>  init = temp
    }
};