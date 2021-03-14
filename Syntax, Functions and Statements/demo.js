let name='Peter';
console.log(name);
function sum(x, y){
    return x+y;
}
console.log(sum(5,6));

function printStars(count){
    console.log('*'.repeat(count))
}
printStars(5);

const walk=function(){// this is not the right way to declare a function
    console.log("Walking");
}
walk();

const walk=()=>{ // expression function anonymous function
    console.log("Walking");
}