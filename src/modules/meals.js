class Meals {
    getAllMeals = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c');

      const info = await response.json();

      return info.meals;
    }
}

export default Meals;