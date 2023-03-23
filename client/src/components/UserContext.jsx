import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});
// createContext() is a function that returns an object with two properties: Provider and Consumer. The Provider component is used to provide a value to all components that are descendants of the Provider component. The Consumer component is used to consume the value that is provided by the Provider component.

// allows you to consume context that has been created by a parent component and passed down to its children components
export function UserContextProvider({ children }) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    axios.get("/profile").then((response) => {
      setId(response.data.userId);
      setUsername(response.data.username);
    });
  }, []);
  return (
    <UserContext.Provider value={{ username, setUsername, id, setId }}>
      {children}
    </UserContext.Provider>
  );
}
