const menu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const title = document.createElement('h2');
  title.innerHTML = 'Current Seasonal Offerings';

  const menuList = document.createElement('ul');
  menuList.classList.add('menu');

  const menuItems = {
    'key1' : 'val',
    'key2' : 'val',
    'key3' : 'val',
    'key4' : 'val',
    'key5' : 'val',
    'key6' : 'val',
    'key7' : 'val',
    'key8' : 'val',
    'key9' : 'val',
    'key10' : 'val',
    'key11' : 'val',
    'key12' : 'val',
    'key13' : 'val',
  }

  for (const recipie in menuItems) {
    const name = document.createElement('li');
    name.classList.add('name');
    name.innerHTML = recipie;
    const description = document.createElement('li');
    description.classList.add('info');
    description.innerHTML = menuItems[recipie];
    menuList.appendChild(name);
    menuList.appendChild(description);
  }

  menuContainer.appendChild(title);
  menuContainer.appendChild(menuList);
  return menuContainer;
}

export default menu;