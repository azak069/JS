const nama = ["Abdurahman", "Zaki", "Dawud"];
const firstName = nama[0];
const midName = nama[1];
const fullName = nama[2];

console.info(firstName);
console.info(midName);
console.info(fullName);
// mengambil data dari array dengan tanpa destructuring

console.info("=====");
console.info(" ");
const [depan, tengah, belakang, ...lainnya] = nama;

console.info(depan);
console.info(tengah);
console.info(belakang);
console.info(lainnya);
// mengambil data dari array dengan destructuring

console.info("=====");
console.info(" ");
const orang = {
  namaDepan: "Abdurahman",
  namaTengah: "Zaki",
  namaBelakang: "Dawud",
  alamat: {
    kabupaten: "Magelang",
    provinsi: "Jawa Tengah",
  },
  hobi: ["Baca", "Nulis", "Ngoding"]
};

const {namaDepan, namaTengah, namaBelakang, alamat:{kabupaten, provinsi}, ...lain} = orang;

console.info(namaDepan);
console.info(namaTengah);
console.info(namaBelakang);
console.info(kabupaten);
console.info(provinsi);
console.info(lain);
// mengambil data dari object dengan destructuring


console.info("=====");
console.info(" ");
function perkenalan({namaDepan, namaTengah, namaBelakang, alamat: {kabupaten, provinsi}}) {
  return `Halo, nama saya ${namaDepan} ${namaTengah} ${namaBelakang} dari ${kabupaten}, ${provinsi}.`;
};

console.info(perkenalan(orang));
// memabuat dan memanggil fungsi dengan parameter object menggunakan destructuring


console.info("=====");
console.info(" ");
function hitung([a, b]) {
  return a + b;
}

console.info(hitung([10, 20]));
// membuat dan memanggil fungsi dengan parameter array menggunakan destructuring


console.info("=====");
console.info(" ");
const saya = ["Abdurahman"];
let [namaDepanSaya, namaTengahSaya = "Zaki", namaBelakangSaya = "Dawud"] = saya;

console.info(namaDepanSaya);
console.info(namaTengahSaya);
console.info(namaBelakangSaya);
// memberikan nilai default pada destructuring array


console.info("=====");
console.info(" ");
const dia = {depanDia: "Monkey", tengahDia: "D. "};
let {depanDia, tengahDia, belakangDia = "Dragon"} = dia;

console.info(depanDia);
console.info(tengahDia);
console.info(belakangDia);
// memberikan nilai default pada destructuring object


console.info("=====");
console.info(" ");
let {depanDia: d, tengahDia: t, belakangDia: b = "Luffy"} = dia;

console.info(d);
console.info(t);
console.info(b);
// mengganti nama variabel pada destructuring object

// Program ini mendemonstrasikan penggunaan destructuring pada array dan object untuk mengambil nilai-nilai tertentu