import _ from 'lodash';
import './style.css';
import logo from './logo.png';
import Meals from './modules/meals.js';

const element = document.querySelector('.img-ft');
const headerImgContainer = document.querySelector('.logo-box');
const mealContainer = document.querySelector('.meals-container');
const newMeal = new Meals();
// Add the image to our existing div.
const myIcon = new Image();
const headerlogo = new Image();
headerlogo.src = logo;
myIcon.src = logo;

myIcon.classList.add('logo');
headerlogo.classList.add('header-logo');
headerImgContainer.appendChild(headerlogo);

element.appendChild(myIcon);

const data = newMeal.getAllMeals();
const likes = newMeal.getAllLikes();

const showMealCards = async () => {
  const DATA = await data;
  const Likes = await likes;
  for (let i = 0; i < Likes.length; i++) {
    DATA.forEach((info) => {
      if (info.idMeal === Likes[i].item_id) {
        info.likes = Likes[i].likes;
      }
    });
  }

  for (let i = 0; i < 9; i++) {
    const card = document.createElement('div');
    const mealImg = new Image();
    const mealName = document.createElement('p');
    const likeBox = document.createElement('a');
    const likeQty = document.createElement('p');
    const comment = document.createElement('button');
    const likeQtyBox = document.createElement('div');
    const nameLikeBox = document.createElement('div');

    card.classList.add('meal-card');
    card.id = `meal${i}`;
    mealImg.classList.add('meal-img');
    nameLikeBox.classList.add('name-like-box');
    likeQtyBox.classList.add('like-box');
    comment.classList.add('comment-btn');

    mealImg.src = DATA[i].strMealThumb;
    mealName.innerText = DATA[i].strMeal;
    likeBox.innerHTML = '<i class="fa fa-heart" id="like-icn"></i>';
    likeQty.innerText = `${DATA[i].likes} likes`;
    comment.innerText = 'comment';

    likeQtyBox.appendChild(likeBox);
    likeQtyBox.appendChild(likeQty);
    nameLikeBox.appendChild(mealName);
    nameLikeBox.appendChild(likeQtyBox);
    card.appendChild(mealImg);
    card.appendChild(nameLikeBox);
    card.appendChild(comment);

    mealContainer.appendChild(card);
  }
};

window.addEventListener('load', () => {
  showMealCards();
});
