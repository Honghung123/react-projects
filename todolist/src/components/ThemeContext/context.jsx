import Content from "./content";
import ThemeProvider from ".";

function ChangeThemeUsingContext() {
    return (
        <ThemeProvider>
            <Content />
        </ThemeProvider>);
}

export default ChangeThemeUsingContext;