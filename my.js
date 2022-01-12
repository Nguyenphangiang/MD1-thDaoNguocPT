let x = [-3,5,4,10,2,1];
let first = 0;
let last = x.length-1
while (first<last){
    let b = x[first];
    x[first]= x[last];
    x[last] = b;
    first++;
    last--;
} document.write(x);