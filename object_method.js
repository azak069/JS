function hey(nama){
    console.info(`Hey ${nama}`);
};
// bisa membuat function di object
const orang = {
    nama: "Zaki",
    sapa: function (nama){
        console.info(`Halo ${nama}`);
    },
    hey:hey
};

orang.sapa("azak");
orang.hey("Zaki");

orang.salam = function(nama){
    console.info(`Salam ${nama}`)
};
// bisa juga memasukkan function ke dalam object langsung, jika sudah punya object

// Program ini mendemonstrasikan penggunaan object method, yaitu memasukkan fuction ke dalam object