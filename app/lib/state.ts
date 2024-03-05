import { createContext } from "react";

export const MenuContext = createContext({
  isOpen: false,
  setIsOpen: (value: boolean) => {},
  isHover: false,
  setIsHover: (value: boolean) => {},
});

export const MenuProvider = MenuContext.Provider;