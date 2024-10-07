import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const useAppContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const getInitialDarkTheme = () => {
    const userPrefersTheme = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;
    const userStorageTheme = localStorage.getItem("dark-theme");
    if (userStorageTheme === null) {
      return userPrefersTheme;
    }

    return userStorageTheme === true;
  };

  const [searchValue, setSearchValue] = useState("cat");
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkTheme());

  const toggleDarkTheme = () => {
    const theme = !isDarkTheme;
    setIsDarkTheme(theme);
  };
  const changeSearchValue = (input) => {
    setSearchValue(input);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
    localStorage.setItem("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <GlobalContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        searchValue,
        changeSearchValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
