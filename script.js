//primitive data types in javascript
let num;
console.log(num);
console.log(typeof(num));
num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num="Gauri Jain";
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));


const sym1= Symbol(4); //symbol type
console.log(sym1);
const sym2= Symbol(4);
console.log(sym1);
if(sym1==sym2){
    console.log("true");
}
else{
    console.log("false");
}