import { forEach } from 'lodash';
import Meals from './meals.js';
import commentCounter from './commentCounter.js';

const thePopup = document.querySelector('.popup-container');
const newMeal = new Meals();

const commentsShow = async (data) => {
  const commentElement = document.querySelector('.insert');
  const commentsCounterVaribale = await commentCounter(data);
  commentElement.textContent = `Comments (${commentsCounterVaribale})`;
};

const createPopup = async (selected, id) => {
  const specificComment = newMeal.getComment(id);
  const data = await specificComment;
  let commentsCounterVaribale = commentCounter(data);
  thePopup.innerHTML = `<div class="pop">
  <span class="closebtn">×</span>
<img src="${selected[0].strMealThumb}" class="popup-img">
<p class="meal-name">${selected[0].strMeal}</p>
<div class ="category-area-box ">
<p class="category"><span class="category-text">Category: </span>${selected[0].strCategory}</p>
<p class="area"><span class="area-text">Area: </span>${selected[0].strArea}</p>
</div>
<a href="${selected[0].strYoutube}" class="youtube">Youtube link</a>
<div class="comment-section" id="comment-section">
<h2 class = "insert">Comments (${commentsCounterVaribale})</h2>
<div class="comment-section">
</div>
</div>
<div>
<form class="comment-frm">
<h2>Add a comment</h2>
<input type="text" placeholder="Your Name" class="comment"id="name">
<textarea col="30" rows="10" class="comment" id="text" data-gramm="false" wt-ignore-input="true"></textarea>
<button class="comment-btn1" >Comment</button></form>
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
  const date = new Date();

  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const commentElement = document.querySelector('.insert');
    newMeal.addComment(id, nameInput.value, comentInput.value);
    let html = '';

    html += `<div> ${date} ${nameInput.value} : ${comentInput.value} </div>`;
    comentSection.insertAdjacentHTML('beforeend', html);
    commentsCounterVaribale += 1;
    commentElement.textContent = `Comments (${commentsCounterVaribale})`;
  });

  specificComment.then((d) => {
    d.forEach((comment) => {
      comentSection.innerHTML += `<div>${comment.creation_date}  ${comment.username}:  ${comment.comment}<div>`;
      commentsCounterVaribale;
    });
  });
};
export default createPopup;