import ArrayToHTML from './js/ArrayToHTML';
import './scss/normalize.scss';
import './scss/main.scss';

const example1 = ['div'];
const example2 = ['h1', 'Text'];
const example3 = ['span', 'More', 'Text'];
const example4 = ['a', ['b', 'More'], ' Text'];
const example5 = ['p', '<b>Text</b>'];

[example1, example2, example3, example4, example5].forEach((example) => {
  console.log(ArrayToHTML.iterateOverArray(example));
});
