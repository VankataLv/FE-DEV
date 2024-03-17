function solve(input) {
let secretCrypto = input.shift();
let line = input.shift();

while(line != 'Buy') {
    let token = line.split("?");
    let command = token[0];

    if(command == 'TakeEven'){
        let cryptoProject = '';

        for (let i = 0; i < secretCrypto.length; i++) {
            if (i % 2 == 0) {
                cryptoProject += secretCrypto[i];               
            }            
        }
        secretCrypto = cryptoProject;
        console.log(secretCrypto);
        
    }else if(command == 'Reverse'){
        let substring = token[1];
        if(secretCrypto.includes(substring)){
            secretCrypto = secretCrypto.replace(substring ,"");
            let reversed = substring.split("").reverse().join("");
            secretCrypto = secretCrypto + reversed;
            console.log(secretCrypto);
    }else{
        console.log('error');
    }
    }else if(command == 'ChangeAll'){
        let substring = token[1];
        let replace = token[2];
        if(secretCrypto.includes(substring)){
            while(secretCrypto.includes(substring)){
                secretCrypto = secretCrypto.replace(substring,replace);
            }
        }
        console.log(secretCrypto);
    }
    line = input.shift();
}
    console.log(`The cryptocurrency is: ${secretCrypto}`)
}
solve()

