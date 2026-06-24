// immediately invoked function expression
(function tea (){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('phulpati');


