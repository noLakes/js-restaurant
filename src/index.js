import setup from './setup';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

// generates basic site elements
setup();

// tracks current tab
let activeTab = 'home';
loadHome();

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
      loadHome();
      break;
    case 'menu':
      loadMenu();
      break;
    case 'contact':
      loadContact();
      break;
  }
  activeTab = e.target.id;
}

document.querySelectorAll('.site-nav li').forEach(el => {
  if(el.id !== 'header-title') {
    el.addEventListener('click', toggleActive);
    el.addEventListener('click', loadTab);
  }
});

/*
const newElement = (type, className, inner=null) => {
  const el = document.createElement(type);
  el.classList.add(className);
  if(inner) el.innerHTML = inner;
  return el;
}
*/
