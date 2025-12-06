`use strict`;

function contoh() {
    const orang = {
        nama: "Budi",
        umur: 25
    };

    with (orang) {
        console.log(`Nama saya ${nama} dan umur saya ${umur} tahun.`);
    } // with statement tidak diizinkan dalam strict mode
}

contoh();
// strict mode pada awal file

function dalam() {
    `use strict`;
    var x = 10;
    var y = 20;
    delete x; // delete tidak diizinkan pada variabel dalam strict mode
    console.log(x);
}

dalam();
// strict mode dalam fungsi

// strict mode memperketat aturan penulisan kode
// yang tidak diizinkan dalam strict mode:
// 1. Menggunakan variabel tanpa deklarasi (misal: a = 10;)
// 2. Menghapus variabel, fungsi, atau argumen (misal: delete x;)
// 3. Duplikasi nama parameter dalam fungsi (misal: function(a, a) {})
// 4. Menggunakan kata kunci yang dilindungi sebagai nama variabel (misal: var let = 10;)
// 5. Menggunakan with statement

// manfaat strict mode:
// 1. Membantu menemukan kesalahan penulisan kode lebih awal
// 2. Meningkatkan performa kode karena optimisasi oleh engine JavaScript
// 3. Mencegah penggunaan fitur-fitur yang berpotensi membingungkan atau berbahaya

// Program ini mendemonstrasikan penggunaan strict mode dalam JavaScript
