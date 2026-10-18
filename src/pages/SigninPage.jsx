import { Link } from "react-router-dom";

const SigninPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <section>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
          </label>
          <button type="submit">Sign in</button>
        </form>
        <Link to="/signup">Sign up</Link>
      </section>
    </main>
  );
};

export default SigninPage;
