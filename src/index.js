import './style.css';
import logo from './logo.png';

const element = document.querySelector('.img-ft');
const headerImgContainer = document.querySelector('.logo-box')
// Add the image to our existing div.
const myIcon = new Image();
const headerlogo = new Image();
headerlogo.src = logo;
myIcon.src = logo;

myIcon.classList.add('logo');
headerlogo.classList.add('header-logo')
headerImgContainer.appendChild(headerlogo)



element.appendChild(myIcon);
