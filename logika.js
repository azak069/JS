const nilaiUjian = 90;
const nilaiAbsen = 70;
console.log("Nilai Ujian = " + nilaiUjian);
console.log("Nilai Absen = " + nilaiAbsen);
const lulusUjian = nilaiUjian > 75;
console.log("Lulus Ujian = " + lulusUjian);
const lulusAbsen = nilaiAbsen > 75;
console.log("Lulus Absen = " + lulusAbsen);
const lulus = lulusUjian && lulusAbsen;
console.log("Lulus = " + lulus);

// Program ini mendemonstrasikan penggunaan operator logika di javascript