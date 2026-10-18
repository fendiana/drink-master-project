const SubscribeForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="subscribe-email">
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </label>
      <input
        id="subscribe-email"
        name="email"
        type="email"
        placeholder="Enter the email"
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default SubscribeForm;
