import setup from './setup';

console.log('Webpack is working!');
setup();

const toggleActive = (e) => {
  if(e.target.classList.contains('active')) return;
  siblings = Array(...e.target.parentNode.children);
  siblings.forEach(el => el.classList.remove('active'));
  e.target.classList.add('active');
} 


/*
const newElement = (type, className, inner=null) => {
  const el = document.createElement(type);
  el.classList.add(className);
  if(inner) el.innerHTML = inner;
  return el;
}
*/
