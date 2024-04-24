
import { useContext } from "react";
import Paragraph from "./paragraph";
import { MyThemeCtx } from ".";

export default function Content() {
    const ctxValue = useContext(MyThemeCtx); 
    return (
        <>
            <button
                className="px-2 py-2 bg-fuchsia-500 text-white rounded-3xl"
                onClick={ctxValue.handleChangeTheme}>Change theme(current theme: {ctxValue.theme})</button>
            <Paragraph>
                <h4 className="text-lime-500">This is a small paragraph</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia in beatae, distinctio velit sit natus, voluptate tempore porro fugit atque recusandae molestias dolores minima harum corporis. Asperiores voluptates aut repellat.</p>
            </Paragraph>
            <Paragraph>
                <h4 className="text-lime-500">This is another small paragraph</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia in beatae, distinctio velit sit natus, voluptate tempore porro fugit atque </p>
            </Paragraph>
        </>
    )
}