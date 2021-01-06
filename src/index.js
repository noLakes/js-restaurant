import setup from './setup';

// generates basic site elements
setup();

let activeTab = 'home';

const content = document.querySelector('.content-container');

function clearContent() {
  content.innerHTML = '';
}

function toggleActive(e) {
  if(e.target.classList.contains('active')) return;
  const siblings = Array(...e.target.parentNode.children);
  siblings.forEach(el => el.classList.remove('active'));
  e.target.classList.add('active');
}

function loadTab(e) {
  if(e.target.id === activeTab) return;
  clearContent();
  switch(e.target.id) {
    case 'home':
      alert('load home');
      break;
    case 'menu':
      alert('load menu');
      break;
    case 'contact':
      alert('load contact');
      break;
  }
  activeTab = e.target.id;
}

document.querySelectorAll('.site-nav li').forEach(el => {
  el.addEventListener('click', toggleActive);
  el.addEventListener('click', loadTab);
});

/*
const newElement = (type, className, inner=null) => {
  const el = document.createElement(type);
  el.classList.add(className);
  if(inner) el.innerHTML = inner;
  return el;
}
*/
