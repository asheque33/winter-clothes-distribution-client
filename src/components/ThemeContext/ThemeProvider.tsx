import React, { createContext, useEffect, useState } from "react";
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  loading: boolean;
}
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  loading: true,
});
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
    setLoading(false); // Set loading to false once the theme is applied
  }, [theme]);
  const toggleTheme = () => {
    setLoading(true);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, loading }}>
      {!loading && children}{" "}
      {/* Render children only after loading is complete */}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
