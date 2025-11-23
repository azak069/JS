const sapa = (nama) => {
    const kata = `Halo ${nama}!`;
    console.info(kata);
};
// membuat function lebih sederhana menggunakan arrow (=>)
// harus dimasukkan ke variabel, bisa menggunakan parameter atau tidak
sapa("azak");

const hay = (orang) => console.info(`Hey ${orang}!`);
// jika dalam funtion hanya diisi satu perintah, bisa dibuat tanpa blok ({})
hay("Zaki");

const tambah = (a, b) => {
    return a + b;
};
// arrow funtion juga bisa menggunakan return
console.info(tambah(5, 10));


const kurang = (c, d) => c - d;
// jika hanya satu baris, tidak perlu kata kunci return
console.info(kurang(10, 5));

const salam = nama => console.info(`Salam ${nama}`);
// jika hanya ada satu parameter, tidak usah menggunakan tanda kurung ()
salam("Zaki");

function buatNama(panggil){
    panggil("azak");
};
// bisa dijadikan parameter seperti anonymous function
buatNama(nama => console.info(`Hai ${nama}`));

/*
Kekurangan Arrow Function :
1. Tidak memiliki fitur arguments object
2. Tidak bisa menggunakan function generator
3. Tidak bisa mengakses this
4. Tidak bisa mengakses super
*/