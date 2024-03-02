import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAuh0IJ2V3UYenQr7KgR_dHXcZdv52iQJo",
  authDomain: "login-clone-ifood.firebaseapp.com",
  projectId: "login-clone-ifood",
  storageBucket: "login-clone-ifood.appspot.com",
  messagingSenderId: "317334758344",
  appId: "1:317334758344:web:60a62476d99ede9b3e96fd"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}