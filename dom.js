/*                  DOCUMENT OBJECT MODEL

    >Window object : top node in DOM hierarchy 
    >Document object : it is a property of the window object
      js can :
        change all the html elements , attributes , css styles in the page
        remove existing elements and attributes
        add new html elements and attributes
        react to existing html events 
        create new html events 
*/

const result = document.getElementById("para");             //by unique id
result.innerHTML = "<b>mySelf</b>";                         //reads html tags
// result.innerText = "<b>hello</b>";                       ... does not read html tags and writes as plain text
result.title = "myName";                                    //attribute setting
console.log(result);

const result2 = document.getElementsByClassName("p1");      //by class name
console.log(result2);
result2[0].innerHTML="hello";

const result3 = document.getElementsByTagName("p");         // by tag name
console.log(result3);
result3[2].innerHTML = "pet";
result3[1].style.color = "blue";
result3[1].innerText = "dog";

const test =document.querySelector(" ul li:nth-child(3)");      // only third li is targeted
test.style.backgroundColor = "green";
test.style.padding = "20px";


const test1 =document.querySelectorAll("ul li")         // all elements of all uls in the html file are targeted
for (x in test1)
{
    test1[x].style.backgroundColor = "yellow";
    test1[x].style.margin = "10px";
}
