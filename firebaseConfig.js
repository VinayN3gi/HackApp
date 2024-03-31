
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: "AIzaSyAEZN9qHoknvOnYPar2JSeAfY3qA-udQLE",
  authDomain: "xclone-a85e3.firebaseapp.com",
  projectId: "xclone-a85e3",
  storageBucket: "xclone-a85e3.appspot.com",
  messagingSenderId: "285680444762",
  appId: "1:285680444762:web:4a7c1baef2bd23ba257f63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
export default auth