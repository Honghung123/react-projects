import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import HeaderMenu from "./HeaderMenu";

const cx = classNames.bind(styles);
export default function Menu({ children, items = [], onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const hasChild = !!item.children;
            const handleClick = () => {
                if (hasChild) {
                    setHistory((prev) => [...prev, item.children]);
                } else {
                    onChange(item);
                }
            };
            return <MenuItem key={index} item={item} onClick={handleClick}></MenuItem>;
        });
    };
    return (
        <Tippy
            interactive
            visible
            render={(attrs) => (
                <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <HeaderMenu
                                title={current.title}
                                onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
