const thePopup = document.querySelector('.popup-container');

const createPopup = (selected) => {
  thePopup.innerHTML = `<div class="pop"><span class="closebtn">×</span>
<img src="${selected[0].strMealThumb}" class="meal-img">
<p class="meal-name">${selected[0].strMeal}</p><p class="category">${selected[0].strCategory}</p>
<p class="area">${selected[0].strArea}</p>
<a href="#" class="youtube">${selected[0].strYoutube}</a>
<div></div><div><form class="comment-frm">
<h2>Add a comment</h2>
<input type="text" placeholder="Your Name" class="comment">
<textarea col="30" rows="10" class="comment" data-gramm="false" wt-ignore-input="true">
</textarea><button class="comment-btn1">Comment</button></form>
</div>
</div>`;

  const pop = document.querySelector('.pop');
  const closbtn = document.querySelector('.closebtn');
  closbtn.addEventListener('click', () => {
    pop.classList.add('hide');
  });
};

export default createPopup;
