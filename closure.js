function buat(nilai){
    const pemilik = "Zaki";
    function tambah(ada){
        console.info(pemilik);
        return nilai + ada;
    }
    return tambah;
};

const nambah = buat(5);
// seakan-akan mengeluarkan variabel dan function yang ada di dalam function
// seakan-akan jadi seperti ini :
// function nambah(ada){
//     console.info("Zaki");
//     return 5 + ada;
// };

console.info(nambah(10));
// langsung panggil dengan mengisi parameter "ada"

// Program ini mendemonstrasikan penggunaan fitur closure, yaitu membuat variabel maupun function dalam function seakan-akan keluar dan bisa diakses langsung