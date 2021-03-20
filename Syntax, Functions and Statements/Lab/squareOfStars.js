function squareOfStars(num) {
    if (num === 1) {
        console.log("*");

    } else {
        let arr = [];
        for (let j = 1; j <= num; j++) {
            arr.push('*');
        }
        for (let i = 1; i <= num; i++) {

            console.log(arr.join(' '));
        }
    }

}

squareOfStars(5);