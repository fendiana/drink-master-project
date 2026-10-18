import { Link } from "react-router-dom";

const SignupPage = () => {
  const handleSubmit = (event) => {
    event.preventDeault();
  };

  return (
    <main>
      <section>
        <h1>Welcome to the App!</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Date of birth
            <input
              name="dateOfBirth"
              type="text"
              placeholder="dd/mm/yyyy"
              autoComplete="bday"
              required
            />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              autoComplete="new-password"
              required
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
        <Link to="/signin">Sign in</Link>
      </section>
    </main>
  );
};

export default SignupPage;
