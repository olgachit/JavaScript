//Write a function that returns a random dice roll between 1 and 6. The function should not have any parameters. Write a main program that rolls the dice until the result is 6. The main program should print out the result of each roll in an unordered list (<ul>). (2p)
function rollDice(){
    return Math.floor(Math.random()*6)+1;
}

function rollUntilSix(){
    const rolls=[];
    let roll;
    do {
        roll=rollDice();
        rolls.push(roll)
        console.log(`role, ${roll}`);
    } while (roll!=6);

    console.log("rolls", rolls);
}

rollUntilSix()