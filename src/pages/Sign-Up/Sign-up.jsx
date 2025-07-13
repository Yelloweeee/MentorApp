import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../firebase";
import "./SignUp.css"
import { getFirestore, doc, setDoc } from "firebase/firestore";



const auth = getAuth(app);
const db = getFirestore(app);


const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName]=useState("");

  const createUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userData = {
        uid: user.uid,
        email: user.email,
        createdAt: new Date(),
        name:name
      };

      await setDoc(doc(db, "users", user.uid), userData);

      alert("Sign up successful and data saved!");
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="box">
      <h1>Sign Up</h1>

      <input
        onChange={(e)=>setName(e.target.value)}
        value={name}
        type="text"
        required
        placeholder="Name"
      />
      
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Email"
      />
      
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Password"
      />

      <button onClick={createUser}>Sign Up</button>
    </div>
  );
};

export default SignupPage;
