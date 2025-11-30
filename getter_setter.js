const nama = {
    namaDepan: "Albert",
    namaBelakang: "Camus",
    get namaLengkap() {
        return `${this.namaDepan} ${this.namaBelakang}`;
    },
    set namaLengkap(nilai) {
        const bagianNama = nilai.split(" ");
        this.namaDepan = bagianNama[0];
        this.namaBelakang = bagianNama[1];
    }
};
// Membuat function menjadi property getter dalam object
console.log(nama.namaLengkap);

nama.namaBelakang = "Einstein";
console.log(nama.namaLengkap); // bisa diubah tanpa mengubah functionnya

nama.namaLengkap = "Emil Cioran"; // menggunakan setter untuk mengubah nilai
console.log(nama.namaLengkap);

// Program ini memperlihatkan penggunaan getter dan setter dalam object JavaScript
