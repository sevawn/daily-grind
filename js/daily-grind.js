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


//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){
    //retrieve data from queryString
    myDay = urlParams.get("day");
}

//turn string into integer
myDay = parseInt(myDay);


//logic for displaying content depending on day
switch(myDay){

 	case 0:
    	today = "Sunday";
        coffee = {
            name:"Pumpkin Spice Latte",
            pic:"pumpkin-spice-latte.jpg",
            alt:"A ceramic mug filled with pumpkin spice latte, topped with whipcream",
            color:"orange",
            day:"Sunday",
            desc:`the pumpkins foster a spicy reprieve`
        };
 	break;

    case 1:
   	    today = "Monday";
        coffee = {
            name:"Cold Brew",
            pic:"cold-brew.jpg",
            alt:"Two glasses of cold brew coffee",
            color:"brown",
            day:"Monday",
            desc:`the coffee grounds slumber in cool waters`
        };
 	break;

 	case 2:
   	    today = "Tuesday";
        coffee = {
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A glass of Bubble Tea",
            color:"pink",
            day:"Tuesday",
            desc:`tapioca pearls tumble through the milky abyss.`
        };
 	break;

    case 3:
   	    today = "Wednesday";
        coffee = {
            name:"Mocha",
            pic:"mocha.jpg",
            alt:"A mug of mocha",
            color:"blue",
            day:"Wednesday",
            desc:`something really cool happens, and mocha is involved`
        };
 	break;

    case 4:
   	    today = "Thursday";
        coffee = {
            name:"Drip",
            pic:"drip.jpg",
            alt:"A small cup of drip coffee",
            color:"green",
            day:"Thursday",
            desc:`energy itself is extracted from the bean, and dripped into your soul`
        };
 	break;

    case 5:
   	    today = "Friday";
        coffee = {
            name:"Frappuccino",
            pic:"frappaccino.jpg",
            alt:"A tall cup of frappuccino",
            color:"DarkCyan",
            day:"Friday",
            desc:`ice blends with cream and sugar to fill a cup with dreams`
        };
 	break;

    case 6:
   	    today = "Saturday";
        coffee = {
            name:"Caramel Latte",
            pic:"caramel-latte.jpg",
            alt:"A tall glass of caramel latte",
            color:"BurlyWood",
            day:"Saturday",
            desc:`caramel sauce simmers in vanilla and milk. It's pretty yummy, some would say`
        };
 	break;

 	default:
    	today = "Something went wrong!";
}

console.log(coffee);

//alert(coffeeTemplate(coffee));

//change content depending on day
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

//change background color
document.querySelector("html").style.backgroundColor = coffee.color;

//turn strong tags inside targeted div to coffee color //el = element
document.querySelectorAll("#coffee-cup strong").forEach(el => {
    el.style.color = coffee.color;
});


function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += 
    `<p>
		<img src="images/${coffee.pic}" alt="${coffee.alt}" 
        id="coffee">
		<strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is 
        <strong>${coffee.name}</strong>
        <br>On ${coffee.day}, ${coffee.desc}
	</p>`;

    return myReturn;
}