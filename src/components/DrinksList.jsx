import DrinkCard from "./DrinkCard";

const DrinksList = ({ drinks = [] }) => {
  if (!drinks.length) {
    return <p>No drinks found.</p>;
  }

  return (
    <ul>
      {drinks.map((drink, index) => (
        <li key={drink._id || drink.id || index}>
          <DrinkCard drink={drink} />
        </li>
      ))}
    </ul>
  );
};

export default DrinksList;
