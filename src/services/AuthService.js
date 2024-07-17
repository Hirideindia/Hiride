import firebase from '../firebaseConfig';

const authService = {
  register: async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      console.error("Error registering user:", error);
      return false;
    }
  },
  login: async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      console.error("Error logging in:", error);
      return false;
    }
  },
  logout: async () => {
    try {
      await firebase.auth().signOut();
      return true;
    } catch (error) {
      console.error("Error signing out:", error);
      return false;
    }
  }
};

export default authService;
