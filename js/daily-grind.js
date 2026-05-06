let myDate = new Date();
let myDay = myDate.getDay();
let today = "";

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


switch(myDay){

 	case 0:
    	today = "Sunday";
 	break;

 	case 2:
   	    today = "Tuesday";
        coffee = {
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A glass of Bubble Tea",
            color:"pink",
            day:"Tuesday",
            desc:`Bubble Tea! Awesome! Hooray!`
        };
 	break;

 	default:
    	today = "Something went wrong!";
}

console.log(coffee);

alert(coffeeTemplate(coffee));

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += 
    `<p>
		<img src="images/${coffee.pic}" alt="${coffee.alt}" 
        id="coffee">
		<strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is 
        <strong>${coffee.name}</strong> ${coffee.day}
	</p>`;

    return myReturn;
}