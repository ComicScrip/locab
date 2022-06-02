import { useState } from "react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  return (
    <>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </>
  );
}
