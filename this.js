console.info(this); // this yang merujuk pada keseluruhan 

// function contoh(){
//     console.info(this);
// };

// contoh();

// function luar(){
//     function dalam(){
//         console.info(this);
//     }
//     dalam();
// };

// luar();
// menggunakan this dalam function atau nested function sama saja merujuk pada keseluruhan

const orang = {
    nama: "Zaki",
    sapa: function(nama){
        console.info(this);
    }
};
// this yang merujuk pada object yang memiliki function nya
orang.sapa("azak");

const manusia = {
    nama: "Emil",
    sapa: function(nilai){
        console.info(`Halo ${nilai}, nama saya ${this.nama}.`);
    }
};
// menggunakan this untuk merujuk pada nilai yang ada di dalam object yang memiliki function tersebut
manusia.sapa("Zaki");

// tidak bisa digunakan di arrow function

// Program ini mendemonstrasikan penggunaan this dalam object method untuk merujuk ke object yang memiliki function