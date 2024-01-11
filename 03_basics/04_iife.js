// Immediately Invoked Function Expression (IIFE)

(function chai (){
    console.log('DB CONNECTED');
})();
// chai()

// we use IIFE removed global pollution 
// Global's scope pullotion create problems, for removing pullotion we 
// need to use IIFE
 
(function chaiourcode() {
    console.log('DB CONNECTED');
})()