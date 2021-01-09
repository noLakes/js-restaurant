const home = () => {

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerHTML = 'Forest Floor';

  const description = document.createElement('p');
  description.classList.add('description');
  description.innerHTML = 'food sought and foraged for in the wilderness of Ontario brought back to the heart of the city';

  titleContainer.appendChild(title);
  titleContainer.appendChild(description);
  return titleContainer;
}

export default home;