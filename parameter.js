function sapa(namaDepan, namaBelakang){
    console.info(`Halo ${namaDepan} ${namaBelakang}! Senang bertemu denganmu.`)
}; // membuat function beserta parameternya

sapa("Abdurahman", "Zaki"); // memanggil function dan memasukkan parameter
sapa("azak", 69); // nilai bebas, bisa string, number, dll.
sapa("azak"); // walau parameter tidak diisi, javascript tidak akan error, tapi jadi undefined
sapa();
sapa("Abdurahman", "Zaki", "D"); // bahkan tidak error mengisi nilai melebihi parameter, tapi tidak dibaca

// Program ini mendemonstrasikan penggunaan parameter/argument dalam function untuk memasukkan nilai yang bisa dikelola funtion