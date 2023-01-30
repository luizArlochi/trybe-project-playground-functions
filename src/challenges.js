// Desafio 1 - Crie a função compareTrue
const compareTrue = (parametro1, parametro2) => parametro1 && parametro2;

// Desafio 2 - Crie a função splitSentence
const splitSentence = (frase) => frase.split(' ');

// Desafio 3 - Crie a função concatName

const concatName = (arrayNames) => `${arrayNames[arrayNames.length - 1]}, ${arrayNames[0]}`;

// Desafio 4 - Crie a função footballPoints

function footballPoints(win, ties) {
  win *= 3;
  ties *= 1;
  let score = win + ties;
  return score;
}

// Desafio 5 - Crie a função highestCount

function highestCount(array) {
  let maior = Math.max(...array)
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  let repete = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (maior === array[index]) {
      repete += 1;
    }
  } return repete;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
