import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query, 
  getDocs
} from "firebase/firestore";

//It will let intialiazeApp to know which project we are using
const firebaseConfig = {
  apiKey: "AIzaSyBttRAuTWF88JNA44ntWDu77IBBbXGJRzI",
  authDomain: "new-crwn-clothing-db.firebaseapp.com",
  projectId: "new-crwn-clothing-db",
  storageBucket: "new-crwn-clothing-db.appspot.com",
  messagingSenderId: "908939716813",
  appId: "1:908939716813:web:f13790421be4811a752184",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
  login_hint: "user@example.com",
});

//for  Auth
export const auth = getAuth();

//for Google Authantication using POP-UP
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

//Google Auth using  Redirect (not going to use this)
export const signInWithGoogleRedirect = () => {
  return signInWithRedirect(auth, googleProvider);
};

//Sign-Up using Email and Password creating user
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  return await createUserWithEmailAndPassword(auth, email, password);
};

//Sign-IN using Email and Password
export const signInExistingUserUsingEmailAndPassword = async (
  email,
  password
) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

//Sign-Out
export const signOutUserHandler = async () => {
  return await signOut(auth);
};

//CREATING AN OBSERVER LISTENER
export const onAuthStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);

//FireStore
export const db = getFirestore();

//Creating user Documnet in db
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const UserSnapshot = await getDoc(userDocRef);
  console.log(UserSnapshot.exists());
  if (!UserSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createDate,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the User", error.message);
    }
  }
  return userDocRef;
};


// ADD/Uploadng data to db
export const addCollectionAndDocument = async (collectionKey , objectsToAdd) =>{

    const collectionRef = collection(db , collectionKey);

    const batch = writeBatch(db);
    
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef , object.title.toLowerCase());
        batch.set(docRef, object);
        
    });
    await batch.commit();
    console.log('done');
};

//Getting Data from Firestore db 
export const getCategoriesAndDocuments = async () =>  {
    const collectinRef = collection(db , 'categories');
    const q = query(collectinRef);
    console.log(q);

    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
        const {title , items} = docSnapshot.data()
        acc[title.toLowerCase()] = items;
        return acc;
    },{});
    return categoryMap;

};
