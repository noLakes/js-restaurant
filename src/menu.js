const menu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const title = document.createElement('h2');
  title.innerHTML = 'seasonal offerings';

  const menuList = document.createElement('ul');
  menuList.classList.add('menu');

  const menuItems = {
    'Charcoal Grilled Yakitori' : 'duck heart, sweet soy glaze  $8',
    'Elk Tartare' : 'hand cut Ontario elk, minced capers, gherkins, shallots, pickled chanterelles, pickled wild leeks, gaufrette potatoes  $18',
    'Endive Salad' : 'poached pear, celeriac, walnuts, dijon vinaigrette $14',
    'Ricotta Cavatelli with Wild Mushrooms' : 'wild foraged mushrooms, tomato sauce, parmesan, basil  $20',
    'Ricotta Cavatelli with Wild Boar Ragu' : 'tomato braised wild boar, parmesan, basil  $26',
    'Bruce County Ontario Venison' : 'seared loin, rutabaga puree, fondant turnips, heirloom baby carrots, pastry wrapped venison terrine, venison jus $42',
    'Ontario Duck' : 'roasted duck breast, cheddar grits, maple beans, braised kale  $36',
    'Buttermilk Fried Rabbit Sandwich' : 'buttermilk fried rabbit, apple purée, in-house mustard,  lettuce, pickles, celeriac remoulade, fries  $26',
    'Wild Mushroom Risotto ' : 'arborio rice, lobster mushrooms, parmesan  $22',
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