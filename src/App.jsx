import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import SignupPage from "./pages/Sign-Up/Sign-up";
import SigninPage from "./pages/Sign-In/Sign-in";
import Quiz from "./pages/Quiz/Quiz";
import {getFirestore, collection, addDoc} from "firebase/firestore";


const auth = getAuth(app);
const firestore=getFirestore(app);

function App() {
  return (
    <div className="App">
      <SignupPage />
      {/* <SigninPage /> */}
      {/* {<Quiz/>} */}
    </div>
  );
}
export default App;
