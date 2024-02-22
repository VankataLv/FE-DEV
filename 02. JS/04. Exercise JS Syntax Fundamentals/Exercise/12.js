function cooking(num, op1, op2, op3, op4, op5) {
    operations = op1[0] + op2[0] + op3[0] + op4[0] + op5[0];

    for (let i = 0; i < 5; i++) {
        switch (operations[i]) {
            case "c":
                num /= 2;
                break;
            case "d":
                num = Math.sqrt(num);
                break;
            case "s":
                num += 1;
                break;
            case "b":
                num *= 3;
                break;
            case "f":
                num -= num * 0.2;
                break;
        }
        console.log(num)
    }
}
// cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')