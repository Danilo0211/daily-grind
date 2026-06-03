/*
    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content
    pic - image src
    alt - the alt tag for the image
    desc - a description of the coffee
    day - the day of the week for the coffee
    color - color associated with coffee
    name - the name of the coffee

*/
let myDate = new Date();

let myDay = myDate.getDay();

let today = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters, if it exists
const urlParams = new URLSearchParams(queryString);


    // retreved data from querystring

if (myDay == urlParams.has("day")) {
        myDay = urlParams.get("day");
}
// turn string into integer 
myDay = parseInt(myDay);

switch(myDay){

 	case 0:
    		today = "Sunday";
            coffee = {
            name:"Drip:",
            pic:"drip.jpg",
            alt:"Sunday's Church!.",
            color:"purple",
            day:"Sunday",
            desc:`It's is my Drip!` 
        };
 	break;

    case 1:
   		today = "Monday";
        coffee = {
            name:"Mocha:",
            pic:"mocha.jpg",
            alt:"Starting my coffee.",
            color:"blue",
            day:"Monday",
            desc:`I love my Mocha!` 
        };
 	break;

 	case 2:
   		today = "Tuesday";
        coffee = {
            name:"Bubble Tea:",
            pic:"bubble-tea.jpg",
            alt:"A pic of a yummy bubble tea.",
            color:"orange",
            day:"Tuesday",
            desc:`I like me some bubble tea!` 
        };
 	break;

    case 3:
   		today = "Wednesday";
        coffee = {
            name:"Caramel-Latte:",
            pic:"caramel-latte.jpg",
            alt:"I love my C&L",
            color:"pink",
            day:"Wednesday",
            desc:`I like to have a Caramel Latte!` 
        };
 	break;

    case 4:
   		today = "Thursday";
        coffee = {
            name:"Cold-Brew:",
            pic:"cold-brew.jpg",
            alt:"Almost my Friday;Yeah!!.",
            color:"red",
            day:"Thursday",
            desc:`I need my Cold Brew NOW!!` 
        };
 	break;

    case 5:
   		today = "Friday";
        coffee = {
            name:"Frappacino:",
            pic:"frappacino.jpg",
            alt:"Happy Hour; Free Coffee.",
            color:"yellow",
            day:"Friday",
            desc:`Nice weekend ahead!` 
        };
 	break;

    case 6:
   		today = "Saturday";
        coffee = {
            name:"Pumpkin-Spice-Latte:",
            pic:"pumpkin-spice-latte.jpg",
            alt:"My Pumpkin Latte; Yeah.",
            color:"green",
            day:"Saturday",
            desc:`My relaxing Pumpkin Spice Latte` 
        };
 	break;

	
}
console.log("coffee");

//alert(coffeeTemplate(coffee));

// add coffee to the page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

//change background color at HTML element
document.querySelector("html").style.backgroundColor= coffee.color;

// change strong tags in template to our colors
document.querySelectorAll("#coffee-cup strong").forEach(el => {
    el.style.color = coffee.color;
});

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
   <p>
            <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee">
            <strong>${coffee.day}'s coffee Special:</strong> ${coffee.day}'s coffee special is <strong>${coffee.name}</strong> ${coffee.desc}
        </p>
    `;

    return myReturn;
}
