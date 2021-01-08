import setup from './setup';
import home from './home';
import menu from './menu';
import contact from './contact';

// loads initial html elements
document.querySelector('body').appendChild(setup());

// designates content container
const content = document.querySelector('.content-container');

// loads content container
function loadContent(source) {
  content.appendChild(source);
}

function clearContent() {
  content.innerHTML = '';
}

// loads home page content
loadContent(home());

// tracks current tab
let activeTab = 'home';

const footer = document.querySelector('.footer-container');

// toggles active class style on nav links
function toggleActive(e) {
  if(e.target.classList.contains('active')) return;
  const siblings = Array(...e.target.parentNode.children);
  siblings.forEach(el => el.classList.remove('active'));
  e.target.classList.add('active');
}

// loads content according to tab
function changeTab(e) {
  if(e.target.id === activeTab) return;
  clearContent();
  switch(e.target.id) {
    case 'home':
      loadContent(home());
      break;
    case 'menu':
      loadContent(menu());
      break;
    case 'contact':
      loadContent(contact());
      break;
  }
  activeTab = e.target.id;
}

document.querySelectorAll('.nav li').forEach(el => {
  if(el.id !== 'header-title') {
    el.addEventListener('click', toggleActive);
    el.addEventListener('click', changeTab);
  }
});
