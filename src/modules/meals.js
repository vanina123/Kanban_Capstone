import {display} from './popup.js'

class Meals {
  getAllMeals = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c');

    const info = await response.json();

    return info.meals;
  }

  getAllLikes = async () => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AF1rtbnUOOnqMyUNBr9N/likes/', {

    });

    const info = await response.json();

    return info;
  }

  setLikes = async (id) => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AF1rtbnUOOnqMyUNBr9N/likes/', {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const info = await response.json();

    return info;
  }

  getComment = async (id) => {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AF1rtbnUOOnqMyUNBr9N/comments?item_id=${id}`, {

    });
    // console.log(id)


    const info = await response.json();
    display(info)
// console.log(info)
    return info;
  }

  addComment = async (id, username, comment) => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AF1rtbnUOOnqMyUNBr9N/comments', {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: username,
        comment: comment
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const info = await response.json();

    return info;
  }
  // export const getData = async () => {
  //   const request = await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TePAWbpwiBHr7xSY6An3/comments");
  //   const response = await request.json()
  //   return response
  // };
}

export default Meals;
// /apps/abc234/comments?item_id=item1
// ID: AF1rtbnUOOnqMyUNBr9N