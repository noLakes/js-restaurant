
const setup = () => {
  const main = document.querySelector('.main-container');
  main.innerHTML = '';

  const header = document.createElement('div');
  const content = document.createElement('div');
  const footer = document.createElement('div');
  
  header.classList.add('header-container');
  content.classList.add('content-container');
  footer.classList.add('footer-container');

  main.appendChild(header);
  main.appendChild(content);
  main.appendChild(footer);
}

export default setup;