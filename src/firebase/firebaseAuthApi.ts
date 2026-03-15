import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebaseSetup";

export const registerUserFirebase = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUserFirebase = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
