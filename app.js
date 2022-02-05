//function name(){
    //what you want to be done in here;
//}
// name();
//"()" = parameters

function adder(num1, num2){
    console.log(num1 + num2);
}

adder(7, 36);   //<== function

const name = "Adrianna";

function toUpper(text){
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}
toUpper(name);   //<== function

const favYoutuber = "Markiplier";

const toLower = (text) => {
    const lowCased = text.toLowerCase();
    console.log(lowCased);
}
toLower(favYoutuber);   //<== function

const movie = {name: "Parasite", director: "Bong Joon Ho", released: 2019;} //<== object

const youtuber = {firstName:"Mark", lastName:"Fischbach", youtubeName:"Markiplier", age:32,
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
};  //<== object method

function pressMe(event){
    alert("Why did you press me?" + event.button);
} //<== event

document.getElementById("demo").innerHTML = youtuber.fullName();
 