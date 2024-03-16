// Code your solutions in this 
const names = ["Guadalupe", "Ollie", "Aki"];
const thankYouCards = writeCards(names);
console.log(thankYouCards);



function writeCards(namesArray) {

    const cards = [];
    for (let i = 0; i < namesArray.length; i++) {
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`);
    }
    return cards;
}

function countDown(number) {
    if (number < 0) {
        console.log("10");
        return;
    }

    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}


















