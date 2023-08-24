import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (firebase) { // Check if firebase is available before using it
      const listener = firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          localStorage.setItem('authUser', JSON.stringify(authUser));
          setUser(authUser);
        } else {
          localStorage.removeItem('authUser');
          setUser(null);
        }
      });

      return () => listener();
    }
  }, [firebase]); // Add firebase as a dependency to useEffect

  return { user };
}
