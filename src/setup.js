const setup = () => {
  const main = document.createElement('div');
  main.classList.add('main-container');

  const header = document.createElement('div');
  const content = document.createElement('div');
  const footer = document.createElement('div');
  
  header.classList.add('header-container');
  content.classList.add('content-container');
  footer.classList.add('footer-container');

  const nav = document.createElement('ul');
  nav.classList.add('nav');

  const title = document.createElement('li');
  title.innerHTML = 'FF';
  title.id = 'header-title';
  nav.appendChild(title);

  const home = document.createElement('li');
  home.innerHTML = 'Home';
  home.classList.add('nav-link');
  home.id = 'home';
  home.classList.add('active');
  nav.appendChild(home);

  const menu = document.createElement('li');
  menu.innerHTML = 'Menu';
  menu.classList.add('nav-link');
  menu.id = 'menu';
  nav.appendChild(menu);

  const contact = document.createElement('li');
  contact.innerHTML = 'Contact';
  contact.classList.add('nav-link');
  contact.id = 'contact';
  nav.appendChild(contact);

  header.appendChild(nav);

  const authorLine = document.createElement('p');
  authorLine.innerHTML = 'by ';
  const author = document.createElement('a');
  author.id = 'author';
  author.innerHTML = 'noLakes';
  author.href = 'https://github.com/noLakes';
  authorLine.appendChild(author);

  const antler = document.createElement('p');
  antler.innerHTML = 'menu borrowed from my local favorite ';
  const antlerLink = document.createElement('a');
  antlerLink.innerHTML = 'Antler';
  antlerLink.href = 'http://www.antlerkitchenbar.com/';
  antler.appendChild(antlerLink);

  footer.appendChild(antler);
  footer.appendChild(authorLine);

  main.appendChild(header);
  main.appendChild(content);
  main.appendChild(footer);
  return main;
}

export default setup;