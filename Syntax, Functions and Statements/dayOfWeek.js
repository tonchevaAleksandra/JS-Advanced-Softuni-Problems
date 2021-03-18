function dayOfWeek(input){
    let result=0;
    switch (input){
        case "Monday": result=1; break;
        case "Tuesday": result=2; break;
        case "Wednesday": result=3; break;
        case "Thursday": result=4; break;
        case "Friday": result=5; break;
        case "saturday": result=6; break;
        case "Sunday": result=7; break;
        default: result=0;
        break;
    }
    if (result===0){
        console.log('error');
    } else  {
        console.log(result);
    }
}

dayOfWeek("Saturday");
dayOfWeek("55");