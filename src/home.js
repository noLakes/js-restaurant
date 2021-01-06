const home = () => {
  const content = document.querySelector('.content-container');

  const title = document.createElement('h1');
  title.innerHTML = 'HOME';

  content.appendChild(title)
}

export default home;