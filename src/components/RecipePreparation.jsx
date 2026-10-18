const RecipePreparation = ({ instructions = "", formData, onChange }) => {
  if (formData && onChange) {
    return (
      <fieldset>
        <legend>Recipe preparation</legend>
        <label>
          Instructions
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={onChange}
            required
          />
        </label>
      </fieldset>
    );
  }

  return (
    <section>
      <h2>Recipe preparation</h2>
      <p>{instructions || "Preparation instructions are not available yet."}</p>
    </section>
  );
};

export default RecipePreparation;
