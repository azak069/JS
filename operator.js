console.log("Operator Aritmatika :");

let angka1 = 9;
let angka2 = 6;
let hasil = angka1 + angka2;
console.log(angka1 + " + " + angka2 + " = " + hasil);
hasil = angka1 - angka2;
console.log(angka1 + " - " + angka2 + " = " + hasil);
hasil = angka1 * angka2;
console.log(angka1 + " x " + angka2 + " = " + hasil);
hasil = angka1 / angka2;
console.log(angka1 + " : " + angka2 + " = " + hasil);
hasil = angka1 ** angka2;
console.log(angka1 + " ^ " + angka2 + " = " + hasil);
hasil = angka1 % angka2;
console.log(angka1 + " modulo " + angka2 + " = " + hasil);     

console.log("\nOperator Assigment :");

hasil += 10;
console.log("Assigment + 10 = " + hasil);
hasil -= 10;
console.log("Assigment - 10 = " + hasil);
hasil *= 10;
console.log("Assigment x 10 = " + hasil);
hasil /= 10;
console.log("Assigment : 10 = " + hasil);
hasil **= 10;
console.log("Assigment ^ 10 = " + hasil);
hasil %= 10;
console.log("Assigment modulo 10 = " + hasil);

console.log("\nOperator Unery :");

let temp = hasil;
hasil = -hasil;
console.log("Negatif = " + hasil);
hasil = temp;
hasil++;
console.log("Increment = " + hasil);
hasil--;
console.log("Decrement = " + hasil);

console.log("\nOperator Perbandingan :");

let banding = angka1 > angka2;
console.log(angka1 + " > " + angka2 + " = " + banding);
banding = angka1 < angka2;
console.log(angka1 + " < " + angka2 + " = " + banding);
banding = angka1 >= angka2;
console.log(angka1 + " >= " + angka2 + " = " + banding);
banding = angka1 <= angka2;
console.log(angka1 + " <= " + angka2 + " = " + banding);
banding = angka1 == angka2;
console.log(angka1 + " ==(sama dengan) " + angka2 + " = " + banding);
banding = angka1 === angka2;
console.log(angka1 + " ===(sama dengan & sama tipe dengan) " + angka2 + " = " + banding);
banding = angka1 != angka2;
console.log(angka1 + " !=(tidak sama dengan) " + angka2 + " = " + banding);
banding = angka1 !== angka2;
console.log(angka1 + " !==(tidak sama dengan / tidak sama tipe dengan) " + angka2 + " = " + banding);

console.log("\nOperator Logika :");

const bool1 = true;
const bool2 = false;
let logika = bool1 && bool1;
console.log(bool1 + " and " + bool1 + " = " + logika)
logika = bool1 && bool2;
console.log(bool1 + " and " + bool2 + " = " + logika)
logika = bool2 && bool2;
console.log(bool2 + " and " + bool2 + " = " + logika)
logika = bool1 || bool1;
console.log(bool1 + " or " + bool1 + " = " + logika)
logika = bool1 || bool2;
console.log(bool1 + " or " + bool2 + " = " + logika)
logika = bool2 || bool2;
console.log(bool2 + " or " + bool2 + " = " + logika)
logika = !bool1;
console.log("! " + bool1 + " = " + logika)
logika = !bool2;
console.log("! " + bool2 + " = " + logika)

// Program ini memperlihatkan operator yang ada dalam javascript