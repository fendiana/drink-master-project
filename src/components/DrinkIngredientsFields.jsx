const DrinkIngredientsFields = ({ formData, onChange }) => {
  return (
    <fieldset>
      <legend>Ingredients</legend>
      <label>
        Ingredients and measures
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={onChange}
          placeholder="e.g. 50 ml vodka, 100 ml juice"
          required
        />
      </label>
    </fieldset>
  );
};

export default DrinkIngredientsFields;
