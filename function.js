function hello(){
    console.info(`Hallo Dunia`)
}; // membuat function

hello(); // memanggil function
hello(); // bisa dipanggil terus

function hello(nama = "Dunia"){
    console.info(`Hallo ${nama}`)
}; // membuat function dengan parameter (default)

hello("Zaki"); // bisa dimasuki parameter

let sapa = hello; // bisa djadikan value dan dimasukkan ke variabel

sapa("azak"); // bisa dipanggil dengan variabelnya

function beriNama(beri){
    beri("Abdurahman");
}; // membuat function yang parameternya dijadikan function

beriNama(hello); // bisa mengirim function sebagai parameter function lain
beriNama(sapa); // bisa juga variabel yang memuat function

let hey = function(orang){
    console.info(`Hey kamu ${orang}`);
}; // bisa membuat function tanpa nama (anonymous), tapi dimasukkan ke variabel

hey("Emil"); // langsung panggil dengan variabel

beriNama(function(nama){
    console.info(`Halo ${nama}`);
}); // bisa membuat anonymous function menjadi parameter

function luar(nama){

    function dalam(nama){
        console.info(`Hai ${nama}`);
    }

    dalam(nama);
}; // bisa membuat funtion di dalam funtion(nested function), tapi hanya bisa diakses di dalamnya

luar("Camus");
// dalam(); // tidak bisa diakses di luar

let angka = 69; // data yang dibuat di luar function itu global scope
// bisa diakses di dalam maupun di luar funtion

function nomor(){
    console.info(angka);
    let total = angka + 1;
    console.info(total);
}; // data yang dibuat di dalam function itu local scope
// hanya bisa diakses di dalam function tersebut

nomor(); 
console.info(angka);

function pertama(){
    let varPertama = "Pertama";

    function kedua(){
        console.info(varPertama);
        let varKedua = "Kedua";
    }

    kedua();
    // console.info(varKedua); // tidak bisa diakses di luar tempat dibuatnya
}; // global scope dan local scope juga berlaku di nested function

pertama();

// Program ini mendemonstrasikan pembuatan dan pemanggilan function