let z = 1;

while (true){
    console.info(z);
    z++;

    if (z > 10){
        break;
    }
}; // menghentikan total perulangan

console.info("=====");

for (let i = 1; i <= 100; i++){
    if (i % 2 === 0){
        continue;
    }
    console.info(i);
}; // melewati perulangan saat ini dan melanjutkan ke perulangan selanjutnya