// Iteration 1  

function maxOfTwoNumbers(num1, num2) {

  if (num1 > num2) {
    return num1
  }
  else {
    return num2
  }


}
console.log(maxOfTwoNumbers(8, 4))

// iteration 2 longest word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord(arr) {
  // let max = [];
  //let min = [];
  return arr.sort(function(a, b) { return b.length - a.length })[0];



}
console.log(findLongestWord(words))

//iteration 3
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNum) {
  let sum = 0;
  for (let i = 0; i < arrNum.length; i += 1) {
    sum += arrNum[i];
  }

  return sum;
  // return sum / arrNum.length    // Iteration  4
}
console.log(sumNumbers(numbers))

// iteration 4.1

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrNumbers) {
  let sum = 0;
  for (let i = 0; i < arrNumbers.length; i += 1) {
    sum += arrNumbers[i];
  }

  return sum / arrNumbers.length

}
console.log(averageNumbers(numbers2))

// iteration 4.2 

const words2 = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arrWord) {
  let sum = 0;
  for (let i = 0; i < arrWord.length; i += 1) {
    sum += arrWord[i].length;
  }

  return sum / arrWord.length

}

console.log(averageWordLength(words2))


// iteration 5
const words3 = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(ArrayOfWords) {

  let Arrnew = [];

  /*
  someArray.forEach((element, index) => {
<executable block>
})
  */


  ArrayOfWords.forEach((element, i) => {

    if (!Arrnew.includes(ArrayOfWords[i])) {
      Arrnew.push(ArrayOfWords[i]);
    }
  })
  return Arrnew;
}
console.log(uniquifyArray(words3));

// iteration 6 find elements

const words4 = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(anArr, wordSearch) {




  if (anArr.includes(wordSearch)) {
    return true
  }



  return false


}

console.log(doesWordExist(words4, 'matter'))

// Iteration 7
const words5 = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arrayW, wordRep) {
  const count = {};

  arrayW.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });



  return console.log(count)
}

console.log(howManyTimes(words5, 'matter'))