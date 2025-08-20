import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <div className="grid justify-center text-center gap-4">
      <h2>Subscribe to my Newsletter</h2>
      <p>From just about anything</p>
      <form onSubmit={handleSubmit} className="grid gap-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-[300px] p-2 border"
        />
        <button type="submit">Subscribe Now</button>
      </form>
      <p>No spam, unsubscribe anytime.</p>
    </div>
  );
}
