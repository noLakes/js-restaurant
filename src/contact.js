const contact = () => {

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  const title = document.createElement('h2');
  title.innerHTML = 'ways to say hello';

  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');

  const infoList = document.createElement('ul');
  infoList.classList.add('contact-details');

  const email = document.createElement('li');
  email.id = 'email';
  email.innerHTML = 'hello@forestfloor.ca'

  const phone = document.createElement('li');
  phone.id = 'phone';
  phone.innerHTML = '647 667 9323';

  const address1 = document.createElement('li');
  address1.id = 'address1';
  address1.innerHTML = '1305 Dundas St West';

  const address2 = document.createElement('li');
  address2.id = 'address2';
  address2.innerHTML = 'Toronto, Ontario, M6J 1X8';

  const hours1 = document.createElement('li');
  hours1.id = 'hours1';
  hours1.innerHTML = 'Weekdays 3pm - 9pm';

  const hours2 = document.createElement('li');
  hours2.id = 'hours2';
  hours2.innerHTML = 'Weekends 2pm - 11pm';

  infoList.appendChild(email);
  infoList.appendChild(phone);
  infoList.appendChild(address1);
  infoList.appendChild(address2);
  infoList.appendChild(hours1);
  infoList.appendChild(hours2);

  const locationImg = document.createElement('img');
  locationImg.classList.add('location');
  locationImg.src = 'img/location.png';


  infoContainer.appendChild(infoList);
  infoContainer.appendChild(locationImg);

  contactContainer.appendChild(title);
  contactContainer.appendChild(infoContainer);
  return contactContainer;
}

export default contact;