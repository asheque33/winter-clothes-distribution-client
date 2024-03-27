import { createContext, useEffect, useState } from "react";
import MainLayOut from "./components/layouts/MainLayOut";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainLayOut />
    </ThemeContext.Provider>
  );
}

export default App;
