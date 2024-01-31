let user = {
    name : "Nana",
    age : 22,
    address : "Jakarta",

    editName: function(name){
        this.name = name;
    },

    editAge: function(age){
        this.age = age;
    },

    editAddress: function(address){
        this.address = address;
    }
};

console.log("__________________Sebelum__________________");
console.log("Nama: "+ user.name);
console.log("Umur: "+ user.age);
console.log("Alamat: "+ user.address);


console.log("_________________Mengubah__________________");
let input = require("prompt-sync")();
        var a,b,c;
        a = input("Masukan Nama: ");
        b = input("Masukan Umur: ");
        c = input("Masukan Alamat: ");


user.editName(a);
user.editAge(b);
user.editAddress(c);


console.log ("__________________Setelah__________________");
console.log("Nama: "+ user.name);
console.log("Umur: "+user.age);
console.log("Alamat: "+user.address);
