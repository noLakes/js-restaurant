const home = () => {
  const content = document.querySelector('.content-container');

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');


  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerHTML = 'Restaurant Name';

  const description = document.createElement('p');
  description.classList.add('description');
  description.innerHTML = 'A small about section describing the restaurant';

  textContainer.appendChild(title);
  textContainer.appendChild(description);
  content.appendChild(textContainer);
}

export default home;