import { createContext, useState } from "react";
export const MyThemeCtx = createContext()

function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light");

    const handleChangeTheme = () =>
      setTheme(theme === "light" ? "dark" : "light");
    const params = {
      theme,
      handleChangeTheme,
    };
    return (
        <MyThemeCtx.Provider value={params}>
            {children}
        </MyThemeCtx.Provider>
    ) 
}
export default ThemeProvider;