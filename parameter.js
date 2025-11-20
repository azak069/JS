function sapa(namaDepan, namaBelakang){
    console.info(`Halo ${namaDepan} ${namaBelakang}! Senang bertemu denganmu.`)
}; // membuat function beserta parameternya

sapa("Abdurahman", "Zaki"); // memanggil function dan memasukkan parameter
sapa("azak", 69); // nilai bebas, bisa string, number, dll.
sapa("azak"); // walau parameter tidak diisi, javascript tidak akan error, tapi jadi undefined
sapa();
sapa("Abdurahman", "Zaki", "D"); // bahkan tidak error mengisi nilai melebihi parameter, tapi tidak dibaca

function profil(nama, kelamin = "Tidak perlu tahu"){
    console.info(`Nama saya ${nama}, gender saya ${kelamin}.`)
}; // membuat parameter default yang akan dijalankan jika parameter tidak diisi

profil("Zaki", "Laki-laki");
profil("Abdurahman"); // "Tidak perlu tahu"
profil("azak", undefined); // "Tidak perlu tahu"
profil("Emil", null); // null
profil(); // nama undefined

// Program ini mendemonstrasikan penggunaan parameter/argument dalam function untuk memasukkan nilai yang bisa dikelola funtion