import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import SignIn from "../../components/SignIn";
import { useContext } from "react";
import { signOut } from "next-auth/react";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import styles from "../../styles/SignUp.module.css";
import { passwordStrength } from "check-password-strength";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";

export default function SignUpPage({ csrfToken }) {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [pCode, setPCode] = useState("");
  const [town, setTown] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation)
      return setError("Vos mots de passe ne sont pas identiques");

    if (["Too weak", "Weak"].includes(passwordStrength(password).value))
      return setError(
        "Votre mot de passe doit contenir au moins une majuscule, une minuscule, un caractère spécial et un chiffre"
      );

    axios
      .post("/api/users", {
        firstname: firstName,
        lastname: name,
        address,
        zip: pCode,
        city: town,
        phone,
        email,
        password,
      })
      .then(() => {
        toast.success("Merci pour votre inscription !");
        setFirstName("");
        setName("");
        setAddress("");
        setPCode("");
        setTown("");
        setPhone("");
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");
        setError("");
      })
      .catch((err) => {
        if (err.response && err.response.status === 409)
          setError("Email déjà utilisé");
      });
  };
  const { currentUserProfile } = useContext(CurrentUserContext);

  return (
    <Layout pageTitle="Connection | Location de matériel de puériculture">
      {currentUserProfile ? (
        <div className={styles.connexionText}>
          Vous êtes connecté en tant que {currentUserProfile.firstname}
          <button
            type="submit"
            id="credentials-login-btn"
            onClick={() => signOut()}
            data-cy="logout_button"
          >
            SE DECONNECTER
          </button>
        </div>
      ) : (
        <div>
          <Banner />
          <h1 className={styles.titleContainerSignUp}>
            Souhaitez-vous vous connecter ?
          </h1>
          <div className={styles.containerForm}>
            <div>
              <Toaster />
            </div>
            <div className={styles.composantSignInContainer}>
              {" "}
              <SignIn csrfToken={csrfToken} />
            </div>

            <div className={styles.inscRegisterForm}>
              <h1 className={styles.titleSignUp}>
                Je souhaite m&lsquo;inscire
              </h1>
              <form
                className={styles.formSignUp}
                onSubmit={handleSubmit}
                data-cy="registerForm"
              >
                <div className={styles.nameLastName}>
                  <label className={styles.labelForm} htmlFor="firstName">
                    Prénom
                    <input
                      className={styles.inputPetitSignUp}
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      data-cy="sign_up_firstName"
                      required
                    />
                  </label>
                  <label className={styles.labelForm} htmlFor="name">
                    Nom
                    <input
                      className={styles.inputPetitSignUp}
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      data-cy="sign_up_name"
                      required
                    />
                  </label>
                </div>
                <label className={styles.labelForm} htmlFor="adresse">
                  Adresse
                  <input
                    className={styles.inputGrandSignUp}
                    type="text"
                    id="adresse"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    data-cy="sign_up_adresse"
                    required
                  />
                </label>
                <div className={styles.codeVille}>
                  <label className={styles.labelForm} htmlFor="codePostal">
                    Code Postal
                    <input
                      className={styles.inputPetitSignUp}
                      type="text"
                      id="codePostal"
                      value={pCode}
                      onChange={(e) => setPCode(e.target.value)}
                      data-cy="sign_up_codePostal"
                      required
                    />
                  </label>
                  <label className={styles.labelForm} htmlFor="ville">
                    Ville
                    <input
                      className={styles.inputPetitSignUp}
                      type="text"
                      id="ville"
                      value={town}
                      onChange={(e) => setTown(e.target.value)}
                      data-cy="sign_up_ville"
                      required
                    />
                  </label>
                </div>
                <label className={styles.labelForm} htmlFor="telephone">
                  Numéro de téléphone
                  <input
                    className={styles.inputGrandSignUp}
                    type="text"
                    id="telephone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    data-cy="sign_up_telephone"
                    required
                  />
                </label>
                <label className={styles.labelForm} htmlFor="email">
                  Adresse mail
                  <input
                    className={styles.inputGrandSignUp}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    data-cy="sign_up_email"
                    required
                  />
                </label>
                <label className={styles.labelForm} htmlFor="password">
                  Mot de passe{" "}
                  <input
                    className={styles.inputGrandSignUp}
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    data-cy="sign_up_password"
                    required
                  />
                </label>
                <label
                  className={styles.labelForm}
                  htmlFor="passwordConfirmation"
                >
                  Confirmez votre mot de passe
                  <input
                    className={styles.inputGrandSignUp}
                    type="password"
                    id="passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    data-cy="sign_up_passwordConfirmation"
                    required
                  />
                </label>
                <p style={{ color: "#D28F71", textAlign: "center" }}>{error}</p>
                <button
                  className={styles.btnInscrSignUp}
                  type="submit"
                  id="credentials-login-btn"
                  data-cy="sign_up_button"
                >
                  S&lsquo;INSCRIRE
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

const getCsrfTokenAndSetCookies = async ({ res, query }) => {
  // to make it work on Vercel
  let baseUrl = process.env.NEXTAUTH_URL || `https://${process.env.VERCEL_URL}`;
  // capturing the callback url if any, which should include the current domain for security ?
  const callbackUrlIsPresent = typeof query?.callbackUrl === "string";
  const callbackUrlIsValid =
    callbackUrlIsPresent && query?.callbackUrl.startsWith(baseUrl);
  const host = callbackUrlIsValid ? query?.callbackUrl : baseUrl;
  const redirectURL = encodeURIComponent(host);
  // getting both the csrf form token and (next-auth.csrf-token cookie + next-auth.callback-url cookie)
  const csrfUrl = `${baseUrl}/api/auth/csrf?callbackUrl=${redirectURL}`;
  const csrfResponse = await fetch(csrfUrl);
  const { csrfToken } = await csrfResponse.json();
  const { headers } = csrfResponse;
  // placing the cookies
  const [csrfCookie, redirectCookie] = headers.get("set-cookie").split(",");
  res.setHeader("set-cookie", [csrfCookie, redirectCookie]);
  // placing form csrf token
  return csrfToken;
};

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfTokenAndSetCookies(context),
    },
  };
}
