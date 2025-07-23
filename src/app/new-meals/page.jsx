import MealSearch from "./components/MealSearch";

const NewMealsPage = async ({ searchParams }) => {
  const { search } = await searchParams;
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      return data?.meals || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await fetchMeals();

  return (
    <div className="px-4 py-6">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Search Meals</h1>
        <MealSearch />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="card bg-base-100 shadow-md">
            <figure>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{meal.strMeal}</h2>
              <p className="text-sm text-gray-500">{meal.strCategory}</p>
            </div>
          </div>
        ))}
      </div>
      {!meals.length && (
        <p className="text-center mt-10 text-gray-500">No meals found.</p>
      )}
    </div>
  );
};

export default NewMealsPage;
