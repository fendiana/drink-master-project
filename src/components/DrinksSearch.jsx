const DrinksSearch = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // read search values and request filtered drinks
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="search" name="search" placeholder="Enter the text" />
      </label>
      <label>
        <select name="category" defaultValue="">
          {/* переробити на окремий компонент */}
          <option value="">All categories</option>
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
        Ingredient
        <select name="ingredient" defaultValue="">
          <option value="">All ingredients</option>
        </select>
      </label>
      {/* <button type="submit">Search</button> */}
    </form>
  );
};

export default DrinksSearch;
