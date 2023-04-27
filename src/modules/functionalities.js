import Meals from "./meals.js"

const theMeal = new Meals()

const updateLikes = async (id) => {
    const likes = await theMeal.getAllLikes()
    let filtered = likes.filter((b) => b.item_id === id)

    return filtered[0].likes
}

export default updateLikes