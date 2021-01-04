import page from './page';

console.log('Webpack is working!');
let test = page.newElement('div', 'testBoy', 'Hello, I am a test div!');
console.log(test);
console.log(page.main);
