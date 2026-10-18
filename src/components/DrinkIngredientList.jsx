const DrinkIngredientsList = ({ ingredients = [] }) => {
  return (
    <section>
      <h2>Ingredients</h2>
      {ingredients.length === 0 ? (
        <p>Ingredients are not available yet.</p>
      ) : (
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={`${ingredient.name}-${index}`}>
              {ingredient.image && <img src={ingredient.image} alt="" />}
              <span>{ingredient.name}</span>
              {ingredient.measure && <span> — {ingredient.measure}</span>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default DrinkIngredientsList;
