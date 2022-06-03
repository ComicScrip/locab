import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users", { name, email, password, role: "admin" })
      .then(() => {
        toast.success("Merci pour votre inscription !");
        setName("");
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");
      });
  };
  return (
    <>
      <div>
        <Toaster />
      </div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-cy="name"
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
            data-cy="email"
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
            data-cy="password"
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
            data-cy="passwordConfirmation"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
