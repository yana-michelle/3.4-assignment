//function name(){
    //what you want to be done in here;
//}
// name();
//"()" = parameters

function adder(num1, num2){
    console.log(num1 + num2);
}

adder(7, 36);

const name = "Adrianna";

function toUpper(text){
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}
toUpper(name);

const favYoutuber = "Markiplier";

const toLower = (text) => {
    const lowCased = text.toLowerCase();
    console.log(lowCased);
}
toLower(favYoutuber);

const youtuber = {firstName:"Mark", lastName:"Fischbach", youtubeName:"Markiplier", age:32,
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
};

document.getElementById("demo").innerHTML = youtuber.fullName();
document.getElementById("demo").innerHTML = text.favYoutuver();