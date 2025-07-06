import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import SignupPage from "./pages/Sign-Up/Sign-up";
import SigninPage from "./pages/Sign-In/Sign-in";
import Quiz from "./pages/Quiz/Quiz";

const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      {/* <SignupPage /> */}
      {/* <SigninPage /> */}
      {<Quiz/>}
    </div>
  );
}
export default App;
