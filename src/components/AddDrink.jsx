import { Link } from "react-router-dom";

const AddDrink = () => {
  return (
    <section>
      <h1>Craft Your Perfect Drink with Drink Master</h1>
      <p>
        Unlock your inner mixologist with Drink Master, your one-stop
        destination for exploring, crafting, and mastering the world's finest
        beverages.
      </p>
      <Link to="/add">Add drink</Link>
    </section>
  );
};

export default AddDrink;
