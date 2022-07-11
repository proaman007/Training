// class laptop{
//     constructor(brands,ram){
//         this.brand=brand
//         this.ram=ram;
//     }
//     getbrand(){
//         return this.brand
//     }
//     setram(ram){
//         console.log(this.ram)
//         this.ram=ram;
//     }
//     getram(){
//         return this.ram;
//         }
// }
// let laptop1= new laptop("dell","16GB")
// laptop.setram(69)
// console.log(laptop1.getbrand)
// console.log(laptop1.setram)


class products{
    constructor(brand,name){
        this.brand=brand;
        this.name=name;
    }
    getbrand(){
        return this.brand
    }
    setname(){
        return this.name;
    }
    getram(){
        return this.ram;
        }
}
class electronic extends products{
    constructor(brand,name,ram){
        super(name,brand)
        this.ram=ram
    }
    getproductdetails(){
        return `the brand is ${this.brand} and name is ${this.name} and ram is ${this.ram}`
    }
}
let ele= new electronic("dell","laptop","16GB")
console.log(ele.getproductdetails())