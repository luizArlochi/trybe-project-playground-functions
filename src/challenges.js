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
  let maior = Math.max(...array);
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

function calcTriangleArea(base, height) {
  return (base * height) / 2;
}

function calcRectangleArea(base, height) {
  return base * height;
}

function calcAllAreas(base, height, form) {
  switch (form) {
  case 'triângulo':
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  case 'retângulo':
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  default:
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
}

// Desafio 7 - Crie a função catAndMouse

function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1 = Math.abs(mouse - cat1);
  const distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(array) {
  return array.map(num => {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'fizzBuzz';
    } if (num % 3 === 0) {
      return 'fizz';
    } if (num % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  });
}
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
