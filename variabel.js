var namaLengkap = "Albert Camus"; // dulu menggunakan var tapi sekarang sudah tidak direkomendasikan
// karena var tidak terikat pada block scope dan selalu global
namaLengkap = "Abdurahman Zaki";
namaLengkap = "Emil" + " " + "Cioran";
let nama = "Albert"; // sekarang menggunakan let
nama = "Zaki";
nama = "Emil";
const namaBelakang = "Devil";
// namaBelakang = "Angel"; // const tidak bisa diubah
console.info(namaLengkap);
console.info(nama);
console.info("Nama : " + nama);
console.info(namaBelakang);

// Program ini mendemonstrasikan penggunaan variabel dalam javascript