import "./global.css"

// This component will share the common css for all child components
function GlobalStyles({ children }) {
    return children;
}

export default GlobalStyles;