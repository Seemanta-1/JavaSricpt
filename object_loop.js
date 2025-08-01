const mobile={
    brand: 'Samsung',
    color: 'Black',
    camera: '12mp',
    price:  12000,
    isNew :true
}

//const pen={brand: econo,price:10}
//const pencile=new Object()
//const rubber = Object.create()


console.log(mobile)
//for of = array
//for in = object

for(const p in mobile){
    console.log(p)
    console.log(mobile[p])
}

const key = Object.keys(mobile)
console.log(key)

for(const i of key){
    console.log(i, mobile[i])
}