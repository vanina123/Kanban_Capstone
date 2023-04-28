import { forEach } from 'lodash';
import Meals from './meals.js';

const thePopup = document.querySelector('.popup-container');
const newMeal = new Meals();

const createPopup = (selected, id) => {
  thePopup.innerHTML = `<div class="pop">
  <span class="closebtn">×</span>
<img src="${selected[0].strMealThumb}" class="meal-img">
<p class="meal-name">${selected[0].strMeal}</p><p class="category">${selected[0].strCategory}</p>
<p class="area">${selected[0].strArea}</p>
<a href="#" class="youtube">${selected[0].strYoutube}</a>
<div class="comment-section">
<h2>Comment</h2>
<div class="comment-section">
 
</div>
</div>
<div>
<form class="comment-frm">
<h2>Add a comment</h2>
<input type="text" placeholder="Your Name" class="comment"id="name">
<textarea col="30" rows="10" class="comment" id="text" data-gramm="false" wt-ignore-input="true">
</textarea><button class="comment-btn1" >Comment</button></form>
</div>
</div>`;

  const pop = document.querySelector('.pop');
  const closbtn = document.querySelector('.closebtn');
  closbtn.addEventListener('click', () => {
    pop.classList.add('hide');
  });

  const nameInput = document.getElementById('name');
  const comentInput = document.getElementById('text');
  const comentSection = document.querySelector('.comment-section');
  const btn = document.querySelector('.comment-btn1');

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    newMeal.addComment(id, nameInput.value, comentInput.value);
    const theComments = newMeal.getComment(id);
    theComments.then((d) => {
      comentSection.innerHTML = '';
      d.forEach((comment) => {
        comentSection.innerHTML += `<div>${comment.creation_date}  ${comment.username}:  ${comment.comment}<div>`;
      });
    });
  });

  const specificComment = newMeal.getComment(id);
  specificComment.then((d) => {
    d.forEach((comment) => {
      comentSection.innerHTML += `<div>${comment.creation_date}  ${comment.username}:  ${comment.comment}<div>`;
    });
  });
};
export default createPopup;