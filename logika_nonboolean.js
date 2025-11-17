/*
OR (||) mencari data truthy dari kiri ke kanan
mengambil data/nilai pertama yang truthy
jika tidak ada, yang diambil data paling kanan
*/

console.info("Hai" || ''); // "Hai"
console.info("" || []); // []
console.info("0" || "Nol"); // "0"
console.info(0 || "Nol"); // "Nol"
console.info(null || "Null"); // "Null"
console.info(undefined || "Undefined"); // "Undefined"
console.info(0 || false); // false

const orang = {
    namaDepan: "",
    namaTengah: "Zaki"
};

const nama = orang.namaDepan || orang.namaTengah;
console.info(nama); // menampilkan attribute yang tidak kosong

/*
AND (&&) mencari data falsy dari kiri ke kanan
mengambil data/nilai pertama yang falsy
jika tidak ada, yang diambil data paling kanan
*/

console.info("Hai" && ''); // ''
console.info("" && []); // ""
console.info("0" && "Nol"); // "Nol"
console.info(0 && "Nol"); // 0
console.info(null && "Null"); // null
console.info(undefined && "Undefined"); // undefined
console.info("Undifined" && "Null"); // "Null"

// Program ini mendemonstrasikan penggunaan operator logika pada data selain boolean