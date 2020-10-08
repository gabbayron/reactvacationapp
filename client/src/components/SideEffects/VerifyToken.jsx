import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const VerifyToken = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        let res = await fetch("/auth/me", {
          method: "GET",
          headers: { Authorization: localStorage.token || sessionStorage.token },
        });
        let userData = await res.json();
        if (userData.error) {
          dispatch({ type: "LOGOUT" });
          history.push("/login");
        } else {
          dispatch({
            type: "LOGIN",
            payload: {
              id: userData.id,
              role: userData.role,
              username: userData.username,
              fname: userData.fname,
              lname: userData.lname,
            },
          });
          if (history.location.pathname === '/register' || history.location.pathname === '/login' || history.location.pathname === '/') {
            history.push("/vacations");
          }
        }
      } catch (error) {
        throw error
      }
    })();
  });
  return null;
};

export default VerifyToken;
