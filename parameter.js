function sapa(namaDepan, namaBelakang){
    console.info(`Halo ${namaDepan} ${namaBelakang}! Senang bertemu denganmu.`)
}; // membuat function beserta parameternya

sapa("Abdurahman", "Zaki"); // memanggil function dan memasukkan parameter
sapa("azak", 69); // nilai bebas, bisa string, number, dll.
sapa("azak"); // walau parameter tidak diisi, javascript tidak akan error, tapi jadi undefined
sapa();
sapa("Abdurahman", "Zaki", "D"); // bahkan tidak error mengisi nilai melebihi parameter, tapi tidak dibaca
console.info("=====");
console.info(" ");

function profil(nama, kelamin = "Tidak perlu tahu"){
    console.info(`Nama saya ${nama}, gender saya ${kelamin}.`)
}; // membuat default parameter yang akan dijalankan jika parameter tidak diisi

profil("Zaki", "Laki-laki");
profil("Abdurahman"); // "Tidak perlu tahu"
profil("azak", undefined); // "Tidak perlu tahu"
profil("Emil", null); // null
profil(); // nama undefined
console.info("=====");
console.info(" ");

function katalog(barang, ...jumlah){
    let total = 0;
    for (const item of jumlah){
        total += item;
    }
    console.info(`Jumlah ${barang} adalah ${total}.`);
}; // membuat rest parameter yang bisa diisi lebih dari satu data/nilai, bentuknya array 
// rest parameter harus ditulis terakhir, kecuali hanya satu parameter

katalog("Susu", 2, 5, 3, 7, 9);
katalog("Roti", 1, 2, 3, 4, 5);
katalog("Soda"); // 0

const nilai = [10, 20 , 30, 40, 50];
katalog("Cola", ...nilai); // bisa memasukkan array yang telah dibuat dengan spread syntax(...)
console.info("=====");
console.info(" ");

function lama(){
    let total = 0;
    for (const item of arguments){
        total += item;
    }
    console.info(`Totalnya adalah ${total}.`);
}; // dulu menggunakan arguments object untuk semua parameter
// tapi tidak fleksibel memilih urutan parameter

lama(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Program ini mendemonstrasikan penggunaan parameter/argument dalam function untuk memasukkan nilai yang bisa dikelola function