const namaDepan = "Abdurahman";
const namaTengah = "Zaki";
const namaBelakang = 'D';
const profil1 = "Nama : " + namaDepan + " " + namaTengah + " " + namaBelakang; // standar
const profil2 = `Nama : ${namaDepan} ${namaTengah} ${namaBelakang}`; // string tamplate
const nilai1 = 90;
const nilai2 = 70;
const lulus1 = `Nama : ${namaTengah}, Lulus : ${nilai1 >= 75}`; // xpression
const lulus2 = `Nama : ${namaDepan}, Lulus : ${nilai2 >= 75}`;
const multi = `Hallo
Nama saya ${namaTengah}
Nilai saya ${nilai1}
Senang bertemu denganmu
`; // multiline string


console.info(profil1);
console.info(profil2);
console.info(lulus1);
console.info(lulus2);
console.info(multi);

// Program ini mendemonstrasikan penggunaan string tamplate dalam javascript