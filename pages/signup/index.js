import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import styles from "../../styles/SignUp.module.css";

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

  const handleSignUp = () => {};
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div>
        <h1 className={styles.titleSignUp}>Je suis déja inscrit</h1>
        <form className={styles.formSignUp} onSubmit={handleSignUp}>
          <label htmlFor="email">
            Adresse mail
            <input
              className={styles.inputGrandSignUp}
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-cy="email"
              required
            />
          </label>
          <label htmlFor="password">
            Mot de passe{" "}
            <input
              className={styles.inputGrandSignUp}
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-cy="password"
              required
            />
          </label>
        </form>
      </div>
      <div className={styles.inscRegisterForm}>
        <h1 className={styles.titleSignUp}>Je souhaite m&lsquo;inscire</h1>
        <form className={styles.formSignUp} onSubmit={handleSubmit}>
          <label htmlFor="name">
            Nom
            <input
              className={styles.inputPetitSignUp}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-cy="name"
              required
            />
          </label>
          <label htmlFor="email">
            Adresse mail
            <input
              className={styles.inputGrandSignUp}
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-cy="email"
              required
            />
          </label>
          <label htmlFor="password">
            Mot de passe{" "}
            <input
              className={styles.inputGrandSignUp}
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-cy="password"
              required
            />
          </label>
          <label htmlFor="passwordConfirmation">
            Confirmez votre mot de passe
            <input
              className={styles.inputGrandSignUp}
              type="text"
              id="passwordConfirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              data-cy="passwordConfirmation"
              required
            />
          </label>
          <button className={styles.btnInscrSignUp} type="submit">
            S&lsquo;INSCRIRE
          </button>
        </form>
      </div>
    </>
  );
}
