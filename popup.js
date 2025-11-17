const masuk = confirm("Kamu mau masuk?"); // meminta masukan pilihan boolean dari pengguna di popup browser
if (masuk) {
    const nama = prompt("Siapa namamu?"); // meminta masukan nilai dari pengguna di popup browser
    alert(`Hallo ${nama}, Selamat datang!`); // menampilkan nilai kepada pengguna di popup browser
} else {
    alert("Sampai jumpa!")
}

// Program ini mendemonstrasikan penggunaan popup browser dalam javascript

