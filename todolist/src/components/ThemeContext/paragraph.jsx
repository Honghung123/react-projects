import { useContext } from "react"
import { MyThemeCtx } from "."

function Paragraph({ children }) {
    const ctxValue = useContext(MyThemeCtx);
    const className = ctxValue.theme === "light" ? "bg-black text-white" : "text-black bg-white";
    return (
            <div className={className}>
                { children }
            </div>
    )
}

export default Paragraph;