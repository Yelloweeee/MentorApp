import React from "react";
import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./SignIn.css";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibleSection, setVisibleSection] = useState("email");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      console.log("Success");
      setEmail("");
      setPassword("");
    });
  };

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <div className="box">
      <h1>Welcome To Improvement!</h1>

      <h3>Sign in</h3>
      <div className="icons">
        <button
          className="email-icon"
          onClick={() => setVisibleSection("email")}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </button>

        <button
          className="google-icon"
          onClick={() => setVisibleSection("google")}
        >
          <FontAwesomeIcon icon={faGoogle} />
        </button>
      </div>

      {visibleSection === "email" && (
        <div className="email">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Email"
          />

          <br />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            placeholder="Password"
          />

          <br />

          <button onClick={signinUser}>Sign In</button>
        </div>
      )}

      {visibleSection === "google" && (
        <div className="google">
          <button onClick={signupWithGoogle}>Sign In with google</button>
        </div>
      )}

      <div className="up">
        <h4>New? Sign Up now!</h4>
      </div>

      <div class="slanted-box"></div>
    </div>
  );
};
export default SigninPage;
