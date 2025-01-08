import sidebarReducer from "@/pages/reducer/sidebarReducer.ts";
import PropTypes from "prop-types";
import { type ReactNode, createContext, useReducer } from "react";

const initialState = {
  isSideBarOpen: false,
};
interface SidebarProviderProps {
  children: ReactNode;
}
export const SidebarContext = createContext({});
export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [state, dispath] = useReducer(sidebarReducer, initialState);

  const toggleDispatch = () => {
    dispath({ type: "TOGGLE_SIDEBAR" });
  };
  return (
    <SidebarContext.Provider value={{ ...state, toggleDispatch }}>
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.propTypes = {
  children: PropTypes.node,
};
