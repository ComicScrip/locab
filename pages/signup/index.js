import { useState } from "react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  return (
    <>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-cy="name-cy"
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-cy="email-cy"
            required
          />
        </label>
        <label htmlFor="password">
          Password{" "}
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-cy="password-cy"
            required
          />
        </label>
        <label htmlFor="passwordConfirmation">
          Password Confirmation
          <input
            type="text"
            id="passwordConfirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            data-cy="passwordConfirmation-cy"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
