const home = () => {
  const content = document.querySelector('.content-container');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerHTML = 'Restaurant Name';

  const description = document.createElement('p');
  description.classList.add('description');
  description.innerHTML = 'A small about section describing the restaurant';

  content.appendChild(title);
  content.appendChild(description);
}

export default home;