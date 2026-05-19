















let.myDate = new Date();

let.myDay = myDate.getDay();

let.today = "";

switch(myDay){

 	case 0:
    		today = "Sunday";
 	break;

    case 1:
   		today = "Monday";
        coffee = {
            name:"Bubble Tea:",
            pic:"bubble-tea.jpg",
            alt:"A pic of a yummy bubble tea.",
            color:"pink",
            day:"Tuesday",
            desc:`I like me some bubble tea!` 
        };
 	break;

 	case 2:
   		today = "Tuesday";
        coffee = {
            name:"Bubble Tea:",
            pic:"bubble-tea.jpg",
            alt:"A pic of a yummy bubble tea.",
            color:"pink",
            day:"Tuesday",
            desc:`I like me some bubble tea!` 
        };
 	break;

 	default:
    	today = "Something went wrong!";

}

console.log(coffee);

//alert(coffeeTemplate(coffee));

// add coffee to the page
document.getElementsById("coffee-cup").innerHTML = coffeeTemplate(coffee);

//change background color at HTML element
document.querySelector("html").style.background = coffee.color;

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
   <p>
            <img src="images/${coffee.pic}" alt="${coffee.pic}" id="coffee">
            <strong>${coffee.day}Coffee Special:</strong> ${coffee.day} daily coffee special is <strong>${coffee.name}</strong>,
            ${coffee.pic}as this is one of our top sellers!
        </p>

    `;

    return myReturn;
}
