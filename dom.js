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

const result2 = document.getElementsByClassName("p1");      //by class name : returns array
console.log(result2);
result2[0].innerHTML="hello";

const result3 = document.getElementsByTagName("p");         // by tag name : returns array
console.log(result3);
result3[2].innerHTML = "pet";
result3[1].style.color = "blue";
result3[1].innerText = "dog";

const test =document.querySelector(" ul li:nth-child(3)");      // only third li is targeted
test.style.backgroundColor = "green";
test.style.padding = "10px";


const test1 =document.querySelectorAll("ul li")         // all elements of all uls in the html file are targeted
for (x in test1)
{
  test1[x].style.backgroundColor = "turquoise";
  test1[x].style.margin = "10px";
  test1[x].style.padding = "10px";
}

function myFunction()
{
  document.getElementById("myH1").setAttribute("class","democlass");
  alert("attribute added successfully");
}

// creating html elements in js

const heading=document.createElement("h2");             //create element 
const bodytag =document.getElementsByTagName("body");   // get the parent
bodytag.append(heading);                                //appending element in parent

/* 1. before

    <body>
    2.prepend


    3.append
    </body>

  4.after     */

/*                EVENTS IN JAVASCRIPT
  1. Mouse events
    >onclick
    >onmouseover
    >onmouseout
    >onmousedown
    >onmouseup
    >onmousemove
    >
  
  2. Key Events
    >onkeydown
  
  3. Form Events
    >onfocus
    >onsubmit
    >onblur
    >onchange
    */
   

function onMouseOver()
{
  console.log("mouse over");
}
function onMouseOut()
{
  console.log("mouse out");
}
function onMouseDown()
{
  console.log("mouse down");
}
function onMouseUp()
{
  console.log("mouse up");
}
function onMouseMove()
{
  console.log("mouse move");
}
function onDoubleClick()
{
  console.log("double clicked");
}