import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <section>
        <h1>Welcome to the App!</h1>
        <p>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <Link to="/signup">Sign up</Link>
        <Link to="/signin">Sign in</Link>
      </section>
    </div>
  );
};

export default WelcomePage;
