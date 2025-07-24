import Link from "next/link";

async function getSingleMeal(id) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await res.json();
  return data.meals || [];
}

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;

  // fetch data
  const [singleMeal] = await getSingleMeal(id);

  return {
    title: singleMeal.strMeal,
    description: singleMeal.strInstructions,
  };
}

const SingleMealPage = async ({ params }) => {
  const { id } = await params;
  const [singleMeal] = await getSingleMeal(id);

  if (!singleMeal) {
    return (
      <p className="text-center mt-10 text-xl text-red-500">Meal not found.</p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={singleMeal.strMealThumb}
            alt={singleMeal.strMeal}
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-3xl">{singleMeal.strMeal}</h1>
          <p className="mt-4 text-lg">{singleMeal.strInstructions}</p>
          <div className="card-actions justify-end mt-6">
            <Link href="/meals" className="btn btn-outline btn-primary rounded">
              ← Back to Meals
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMealPage;
