import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDOYRSw81zUJkH2xBrOa-QfzlfnkyHFrx8",
    authDomain: "ema-john-auth-onlineshop.firebaseapp.com",
    projectId: "ema-john-auth-onlineshop",
    storageBucket: "ema-john-auth-onlineshop.appspot.com",
    messagingSenderId: "603568267061",
    appId: "1:603568267061:web:d0bed0cde83a84b70a767c",
};

const app = initializeApp(firebaseConfig);
export default app;
