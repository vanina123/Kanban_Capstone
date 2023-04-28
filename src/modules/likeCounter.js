import Meals from './meals.js';

const theMeal = new Meals();

const likeCounter = async (id, data) => {
  // const likes = await theMeal.getAllLikes();
  const filtered = data.filter((b) => b.item_id === id);
  return filtered[0].likes;
};

export default likeCounter;