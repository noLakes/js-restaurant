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
  title.innerHTML = 'Title';
  title.id = 'header-title';
  nav.appendChild(title);

  const home = document.createElement('li');
  home.innerHTML = 'Home';
  home.id = 'home';
  home.classList.add('active');
  nav.appendChild(home);

  const menu = document.createElement('li');
  menu.innerHTML = 'Menu';
  menu.id = 'menu';
  nav.appendChild(menu);

  const contact = document.createElement('li');
  contact.innerHTML = 'Contact';
  contact.id = 'contact';
  nav.appendChild(contact);

  header.appendChild(nav);

  const author = document.createElement('a');
  author.id = 'author';
  author.innerHTML = '@noLakes';
  author.href = 'https://github.com/noLakes';

  footer.appendChild(author);

  main.appendChild(header);
  main.appendChild(content);
  main.appendChild(footer);
  return main;
}

export default setup;