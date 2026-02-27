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

//largest of 3 nums
let x=2; let y=3; let z=1;
let largest=((x>y)?((x>z)?(x):(z)):((y>z)?(y):(z)));
document.write(largest + "<br />");

//loop
let count;
document.write("Starting loop"+"<br />");
for (count =0;count<10; count++)
{
    document.write("current count :"+ count + "<br />");
}
document.write("loop stopped"+ "<br />"+ "<br />");

let c=0;
document.write("starting loop"+ "<br />");
while (c<10)
{
    document.write("current count :"+ c + "<br />");
    c++;
}
document.write("loop stopped"+ "<br />"+ "<br />");

let grade='D';
switch(grade)
{
    case 'A':
        document.write("Good"+ "<br />");
        break;
    case 'B':
        document.write("Okay"+ "<br />");
        break;
    case 'C':
        document.write("Passed"+ "<br />");
        break;
    case 'D':
        document.write("Not so Good"+ "<br />");
        break;
    case 'F':
        document.write("Failed"+ "<br />");
        break;
    default:
        document.write("invalid"+ "<br />");
}


function myFunction() //without parameters function
{
    alert ("hello world");
}

function sayHello(name,age)
{
    document.write(name+" is "+age+" years old");
}
