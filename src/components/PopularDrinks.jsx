import DrinksList from "./DrinksList";

const PopularDrinks = () => {
  return (
    <aside>
      <h2>Popular drinks</h2>
      <DrinksList drinks={[]} />
    </aside>
  );
};

export default PopularDrinks;
