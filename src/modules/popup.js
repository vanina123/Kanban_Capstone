import logo from '../../src/logo.png';

    const pop = document.createElement('div');
    const span = document.createElement('span')
    const mealImg = new Image();
    const mealName = document.createElement('p');
    const catergory = document.createElement('p');
    const area = document.createElement('p');
    const youtube = document.createElement('a');

    const time = document.createElement('div');

    const popup = document.createElement('div');
    const form = document.createElement('form');
    const head = document.createElement('h2');
    const input = document.createElement('input');
    const textarea = document.createElement('textarea');
    const btn1 = document.createElement('button');


    // adding content
    span.innerHTML = '&times;'
    mealImg.src = logo;
    mealName.innerHTML = 'Nana Van';
    catergory.innerHTML = 'France';
    area.innerHTML = 'desert'
    youtube.innerHTML = 'youtube.com'
    head.innerHTML = 'Add a comment'
    btn1.innerHTML = 'Comment'


// set attribute
    youtube.setAttribute('href', '#')
    textarea.setAttribute('col', '30')
    textarea.setAttribute('rows', '10')



    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Your Name');

    // classes
    pop.classList.add('pop')
    pop.classList.add('hide')
    span.classList.add('closebtn')
    form.classList.add('comment-frm');
    input.classList.add('comment');
    textarea.classList.add('comment');
    btn1.classList.add('comment-btn1');

    popup.appendChild(form);
    form.appendChild(head);
    form.appendChild(input);
    form.appendChild(textarea);
    form.appendChild(btn1);


    pop.appendChild(span);
    pop.appendChild(mealImg);
    pop.appendChild(mealName);
    pop.appendChild(catergory);
    pop.appendChild(area);
    pop.appendChild(youtube);
    pop.appendChild(time);
    pop.appendChild(popup);


    // const openPop = document.querySelector('.comment-btn');
    
    // openPop.addEventlistener('click', (event) => {
    //     pop.classList.remove('hide');
    //     event.preventDefault();
    // });

    // span.addEventListener('click', () => {
    //     pop.classList.add('hide');
    // });

export default pop



