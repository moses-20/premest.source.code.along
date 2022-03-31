import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [darkTheme, setDarkTheme] = useLocalStorage("darkTheme", false);

  useEffect(() => {
    const dark = {
      defaultBackground: "#111",
      cardBackground: "#222",
      textColor: "#DDD"
    };

    const light = {
      defaultBackground: "#EEE",
      cardBackground: "#FFF",
      textColor: "#000"
    };

    const theme = {
      defaultBackground: darkTheme
        ? dark.defaultBackground
        : light.defaultBackground,
      cardBackground: darkTheme ? dark.cardBackground : light.cardBackground,
      textColor: darkTheme ? dark.textColor : light.textColor
    };

    let root = document.querySelector(":root");
    root.style.setProperty("--default-bg", theme.defaultBackground);
    root.style.setProperty("--card-bg", theme.cardBackground);
    root.style.setProperty("--text-color", theme.textColor);
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useThemeContext() {
  return useContext(ThemeContext);
}

export { ThemeContextProvider, useThemeContext };
