import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav aria-label="Main navigation">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/drinks">Drinks</NavLink>
      <NavLink to="/add">Add Drink</NavLink>
      <NavLink to="/my">My drinks</NavLink>
      <NavLink to="/favourites">Favourites</NavLink>
    </nav>
  );
};

export default Navigation;
