var fruits=['apple','orange','banana','pineapple']
console.log(fruits[3])
fruits[1]='jambura';
console.log(fruits)

// Second task
const tourstSpot=['Cox Bazar','haor','Sundorban'];
tourstSpot.push('Dhaka','Chottogram')
console.log(tourstSpot)
tourstSpot.pop()
console.log(tourstSpot)

//third task
let books=['javascripts','bangla','english']
if (books.includes('javascripts'))
    console.log('present')
else console.log('Not present')

//fourth task
var num=[]
var num2='bkdhfojf'
var num3=8
console.log(Array.isArray(num))
console.log(Array.isArray(num2))
console.log(Array.isArray(num3))

//fifth task
var arr1=[1,2,3,4];
var arr2=[5,6,7,8];
var arr3= arr1.concat(arr2)
console.log(arr3)