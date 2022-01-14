import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext({
  setAlert: (msg, type) => {},
});

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // set an alert
  const setAlert = (msg, type) => {
    dispatch({ type: "SET_ALERT", payload: { msg, type } });
    // remove alert after some seconds
    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
