function stringLength(input1, input2, input3){
    let sum=input1.length +input2.length+input3.length;
    console.log(sum);
    let averageSum = Math.floor(sum/3);
console.log(averageSum);
}
stringLength("s", "bo", "hyg");

function strlen(...params){
    let total=params.reduce((a,c) => a+c.length,0);
    console.log(total);
    console.log(Math.floor(total/params.length));
}

strlen('chocolate', 'ice cream', 'cake');
strlen('paste', '5', '22.3');