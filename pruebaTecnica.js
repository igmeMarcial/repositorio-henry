

/*
function fibonacci(num){
    let lista = [0,1];
    
    for(let i = 2;i<=num;i++){
        lista.push(lista[i-1] + lista[i-2]);
    }
    //console.log(lista);
    return[lista, lista[num]];
}

fibonacci(10);

*/
/*
fb=[0,1]; [...Array(num+1).keys()].slide(2).forEach(n=>fb=[...fb,fb[n-2]+fb[n-1]])
*/

/*
function generateFibonaccis(n) {
    var fib = [1, 1];
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i - 2]+ fib[i - 1];
    }
    return fib;
}
var fib = generateFibonaccis(10);
console.log(fib.join(" "));
*/




function f (n){
    let fig=[0,1];
    for(let i = 2;i<=n;i++){
        fig[i] = fig[i-1]+fig[i-2];
    }
    return fig
}

let result = f(10);

console.log(result.join(""));


/*===================================*/



