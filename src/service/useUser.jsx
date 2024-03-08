import React, { useState, useEffect } from "react";
import { auth } from "../service/firebase";

const useUser = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });

    return () => unsubscribe();
  }, []);

  return [user, setUser];
};

export default useUser;
