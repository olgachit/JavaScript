/*
function greet() {
    console.log('Well, hello!');
}

greet();

        function greet1(text, times) {
            for (let i = 1; i <= times; i++) {
                console.log(text + ' ' + i + '. time!');
            }
            return;
        }

        greet1("sw2", 5)

let c;
function sum(a,b){
    c=a+b;
    return c;
}
console.log(sum(2,3));

        function grow(array) {
            for (let i = 0; i<array.length; i++) {
              array[i]++;
            }
            return;
        }

        const numbers = [5,6,7];
        grow(numbers);
        console.log(numbers[0] + ' ' + numbers[1] + ' ' + numbers[2]);

 */
function doLottery (numbers, num) {
  const row = [];
  let r;
  for (let i = 0; i < num; i ++) {
    let ok = false;

    while (!ok) {
      ok = true;
      r = Math.floor(Math.random() * numbers) + 1;
      for (let j = 0; j < i + 1; j ++) {
        if (row [j] === r) {
          ok = false;
        }
      }
    }
    row[i] = r;
  }
  return row;
}

const lottery = doLottery(40,7);
for (let i = 0; i < lottery.length; i++) {
    console.log(lottery[i]);
}