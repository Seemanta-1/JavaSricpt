const sentence="I am a student";
''
let reverse=''
for (const i of sentence){
    //console.log(i)
    reverse=i+reverse;
}
console.log(reverse)

for (let i=sentence.length;i>0;i--){
    console.log( sentence[i])
}

//shortcut
const reversed=sentence.split('').reverse().join('');
console.log(reversed)