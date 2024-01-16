import { createContext } from "react";

const UserContext = createContext({
  loggedInUsor: "Default User",
});

export default UserContext;
