
function FIZZBUZZ (numero){
    for(let i=1; i<=numero ;i++){
        if(i%5==0 && i%3==0){
            console.log("Fizz buzz");
        }else if(i%3==0){
            console.log("fizz");
        }else if(i%5==0){
            console.log("buzz");
        }else{
            console.log(i);
        };    
    };
};

FIZZBUZZ(30);