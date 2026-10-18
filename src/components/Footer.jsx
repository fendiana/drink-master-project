import { Link } from "react-router-dom";
import FollowUs from "./FollowUs";
import SubscribeForm from "./SubscribeForm";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer>
      <Logo />
      <FollowUs />
      <p>&copy; 2023 Drink Master. All rights reserved.</p>
      <nav>
        <Link to="/drinks">Drinks</Link>
        <Link to="/add">Add Drink</Link>
        <Link to="/my">My drinks</Link>
        <Link to="/favourites">Favourites</Link>
      </nav>
      <SubscribeForm />
      <Link>Privacy Policy</Link>
      <Link>Terms of Service</Link>
    </footer>
  );
};

export default Footer;
