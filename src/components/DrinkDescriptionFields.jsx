import PageTitle from "./PageTitle";

const DrinkDescriptionFields = ({ formData, onChange }) => {
  return (
    <fieldset>
      <legend>Drink description</legend>
      <label>
        Add image
        <input
          name="image"
          type="url"
          value={formData.image}
          onChange={onChange}
          required
        />
      </label>
      <label>
        Enter item title
        <input name="name" value={formData.name} onChange={onChange} required />
      </label>
      <label>
        Enter about recipe
        <input name="name" value={formData.name} onChange={onChange} required />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={onChange}
          required
        >
          <option value="">Select category</option>
          <option value="Ordinary Drink">Ordinary Drink</option>
          <option value="Cocktail">Cocktail</option>
          <option value="Shake">Shake</option>
          <option value="Cocoa">Cocoa</option>
          <option value="Shot">Shot</option>
          <option value="Coffee/Tea">Coffee/Tea</option>
          <option value="Homemade Liqueur">Homemade Liqueur</option>
          <option value="Punch/Party Drink">Punch/Party Drink</option>
          <option value="Deer">Deer</option>
          <option value="Soft Drink">Soft Drink</option>
        </select>
      </label>
      <label>
        Glass
        <input
          name="glass"
          value={formData.glass}
          onChange={onChange}
          required
        />
        {/* додвати варіанти стакану як select */}
      </label>
      <label>
        Alcohol
        <select
          name="alcohol"
          value={formData.alcohol}
          onChange={onChange}
          required
        >
          <option value="">Select type</option>
          <option value="Alcoholic">Alcoholic</option>
          <option value="Non alcoholic">Non alcoholic</option>
        </select>
      </label>
    </fieldset>
  );
};

export default DrinkDescriptionFields;
