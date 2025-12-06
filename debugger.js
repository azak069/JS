function buatNamaLengkap(namaDepan, namaTengah, namaBelakang) {
    debugger; // menyisipkan debugger untuk keperluan debugging
    // debugger akan menghentikan eksekusi program di sini jika developer tools dibuka
    const fullName = `${namaDepan} ${namaTengah} ${namaBelakang}`;
    return fullName;
};

const namaLengkap = buatNamaLengkap("Abdurahman", "Zaki", "Dawud");
console.info(namaLengkap);
// debugger digunakan untuk membantu developer menemukan dan memperbaiki kesalahan dalam kode

// Program ini mendemonstrasikan penggunaan debugger dalam JavaScript
