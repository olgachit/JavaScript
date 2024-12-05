//Modify the function above so that it gets the number of sides on the dice as a parameter. With the modified function you can for example roll a 21-sided role-playing dice. The difference to the last exercise is that the dice rolling in the main program continues until the program gets the maximum number on the dice, which is asked from the user at the beginning.
function rollDice(sides){
    return Math.floor(Math.random()*sides)+1;
}

function rollUntilSix(){
    const rolls=[];
    let roll;
    do {
        roll=rollDice(21);
        rolls.push(roll)
        console.log(`role, ${roll}`);
    } while (roll!=21);

    console.log("rolls", rolls);
}

rollUntilSix()