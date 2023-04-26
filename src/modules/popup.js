import logo from "../../src/logo.png";
// import display from "../index.js";
const showPopup = (DATA, parent) => {

// const parent = document.getElementsByClassName('footer')
 const pop = document.createElement("div");
 const span = document.createElement("span");
const mealImg = new Image();
const mealName = document.createElement("p");
const catergory = document.createElement("p");
const area = document.createElement("p");
const youtube = document.createElement("a");
// comment details
const time = document.createElement("div");
// form div
const popup = document.createElement("div");
const form = document.createElement("form");
const head = document.createElement("h2");
const input = document.createElement("input");
const textarea = document.createElement("textarea");
const btn1 = document.createElement("button");

// adding content
span.innerHTML = "&times;";
mealImg.src = DATA.strMealThumb
mealName.innerHTML = DATA.strMeal
catergory.innerHTML = DATA.strCategory
area.innerHTML = DATA.strArea
youtube.innerHTML = DATA.strYoutube
head.innerHTML = "Add a comment";
btn1.innerHTML = "Comment";

// set attribute
youtube.setAttribute("href", "#");
textarea.setAttribute("col", "30");
textarea.setAttribute("rows", "10");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Your Name");

// classes
pop.classList.add("pop");
pop.classList.add("hide");
span.classList.add("closebtn");
form.classList.add("comment-frm");
input.classList.add("comment");
textarea.classList.add("comment");
btn1.classList.add("comment-btn1");
// appendChild form
popup.appendChild(form);
form.appendChild(head);
form.appendChild(input);
form.appendChild(textarea);
form.appendChild(btn1);
// appendChild pop
pop.appendChild(span);
pop.appendChild(mealImg);
pop.appendChild(mealName);
pop.appendChild(catergory);
pop.appendChild(area);
pop.appendChild(youtube);
pop.appendChild(time);
pop.appendChild(popup);
// export pop

// close popup
span.addEventListener("click", () => {
  pop.classList.add("hide");
});

parent.appendChild(pop)
}


// const id = display(console.log(id))

export default showPopup;

