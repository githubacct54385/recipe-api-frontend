import { createContext } from "react";
import AppContextState from "./AppContextState";

const AppContext = createContext({} as AppContextState);
AppContext.displayName = "AppContext";
export default AppContext;
