

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



/*
function f (n){
    let fig=[0,1];
    for(let i = 2;i<=n;i++){
        fig[i] = fig[i-1]+fig[i-2];
    }
    return fig
}

let result = f(10);

console.log(result.join(""));

*/
/*===================================*/

// let arr = ["flower","flow","flight"]

// let i = arr[0];

// console.log(!arr[1].startsWith(i));
// console.log(i.slice(0,-1))

// if(!arr[1].startsWith(i)){
//     i = i.slice(0,-1);
// }else{

// }
/*
Dada una cadena que contiene solo los caracteres '(', ')', '{', '}', '[' y ']', determine
 si la cadena de entrada es válida. Una cadena de entrada es válida si: Los corchetes abiertos 
 deben cerrarse con el mismo tipo de corchetes. Los corchetes abiertos deben cerrarse en el orden 
 correcto. Cada paréntesis cerrado tiene un paréntesis abierto correspondiente del mismo tipo.*/


let s = "()"

const map = {
    '(': ')',
    '{': '}',
    '[': ']'
};

for(let y = 0;y < s.length; y++){
    let r = s.charAt(y);
    let oo = []
    
    if(map[r]){
        oo = oo.push(map[r])
    }else if (r !== r.pop()) {
        return false;
    }
    console.log(oo)
    return stack.length === 0;
}



