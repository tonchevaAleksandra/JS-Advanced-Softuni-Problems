function circleArea(input){
    let inputType=typeof input;

    if(inputType==='number')
    {
        let result=Math.pow(input);
    } else{
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }

}

circleArea(5.5);
// circleArea('5');