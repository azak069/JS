function hey(nama){
    console.info(`Hey ${nama}`);
};

const orang = {
    nama: "Zaki",
    sapa: function (nama){
        console.info(`Halo ${nama}`);
    },
    hey:hey
};

orang.sapa("azak");
orang.hey("Zaki");

// Program ini mendemonstrasikan penggunaan object method, yaitu memasukkan fuction ke dalam object