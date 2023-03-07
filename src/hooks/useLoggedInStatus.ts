import { getAccessToken } from "@/utils/cookie.utils";
import { useEffect, useState } from "react";

export const useLoggedInStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return { loggedIn, setLoggedIn };
};
