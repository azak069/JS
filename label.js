loopa:
    for (let a = 0; a < 100; a++){
        loopb:
            for (let b = 1; b <= 10; b++){
                if (a > 10){
                    continue loopa;
                }
                console.info(`${a} = ${b}`)
            }
    };

// Program ini mendemonstrasikan penggunaan label untuk menamai sebuah perulangan, lalu mengakses break/continue dengan label