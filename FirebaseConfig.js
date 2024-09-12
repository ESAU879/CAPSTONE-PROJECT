// Import the necessary Firebase functions
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBF535BRJ1eviQyYg4Ry5vPIe-C3mmIeKk",
    authDomain: "bh-mobile-app-aa1fa.firebaseapp.com",
    projectId: "bh-mobile-app-aa1fa",
    storageBucket: "bh-mobile-app-aa1fa.appspot.com",
    messagingSenderId: "289392439803",
    appId: "1:289392439803:web:80481dc298e5fefb0d5b5e",
    measurementId: "G-RC4P459RT2"
};

// Initialize Firebase only if it hasn't been initialized yet
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0]; // If already initialized, use the existing instance
}

// Initialize Firebase Authentication with persistence, only if it hasn't been initialized
let auth;
try {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    });
} catch (error) {
    if (error.code === 'auth/already-initialized') {
        auth = getAuth(app); // Use existing auth instance if it's already initialized
    } else {
        throw error; // Re-throw other errors
    }
}

export { auth };
