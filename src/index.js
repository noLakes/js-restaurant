import setup from './setup';

console.log('Webpack is working!');
setup();


const newElement = (type, className, inner=null) => {
  const el = document.createElement(type);
  el.classList.add(className);
  if(inner) el.innerHTML = inner;
  return el;
}
