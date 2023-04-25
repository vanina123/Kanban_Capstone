import './style.css';
import logo from './logo.png';

const element = document.querySelector('.img-ft');
// Add the image to our existing div.
const myIcon = new Image();
myIcon.src = logo;
myIcon.classList.add('logo');

element.appendChild(myIcon);

