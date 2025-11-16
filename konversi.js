const bilangan = "6.9";
const pecahan = "6.9";
const angka1 = "6.9";
const angka2 = "69";
const a = 6;
const b = 9;
const j1 = a + b;
const j2 = a.toString() + b.toString(); // number to string
const c = "D";
const d = Number(c);
const j3 = d + 10;

console.log(parseInt(bilangan)); // string to integer
console.log(parseFloat(pecahan)); // string to float
console.log(Number(angka1)); // string to number
console.log(Number(angka2));
console.log(j1);
console.log(j2);
console.log(parseInt(c)); // bukan angka, maka NaN (Not a Number)
console.log(parseFloat(c));
console.log(parseInt(a + c)); // toleransi, jika yang di depan itu angka
console.log(parseFloat(a + c));
console.log(parseInt(c + b)); // tidak toleransi, jika angka yang di belakang
console.log(parseFloat(c + b));
console.log(Number(c));
console.log(Number(a + c)); // tidak menoleransi sama sekali
console.log(j3) // NaN jika dijumlahkan hasilnya tetap NaN
console.log(isNaN(c)); // mengecek apakah data itu NaN atau bukan, outputnya boolean
console.log(isNaN(a));
console.log(isNaN(NaN));

// Program ini menampilkan macam konversi antar tipe data dalam javascript