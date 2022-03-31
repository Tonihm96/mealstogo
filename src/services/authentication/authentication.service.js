import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(getAuth(), email, password)

export const logoutRequest = () => signOut(getAuth())

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(getAuth(), email, password)

export const updateCurrentUser = () => onAuthStateChanged(getAuth())
