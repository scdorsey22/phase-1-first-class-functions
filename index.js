function receivesAFunction(cb) {
cb()
}

function returnsANamedFunction() {
    return function named() {
    }
}

function returnsAnAnonymousFunction() {
    return function () {}
    
}