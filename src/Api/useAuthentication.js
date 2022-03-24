import React, { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../config/firebase";

function useAuthentication() {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        //console.log(user)
      } else {
        setUser();
      }
    });
    return unsubscribeFromAuthStatuChanged;
  }, []);
  return (
    user
  )
}

export default useAuthentication;
