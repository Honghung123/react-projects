import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faEarthAsia,
    faEllipsisV,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";

// Headless -Render your own tippy element from scratch
import Tippy from "@tippyjs/react/headless";
// Rename Wrapper to PopperWrapper to easy to know which it belongs to
import { Wrapper as PopperWrapper } from "~/components/Popper";

import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { faCircleQuestion, faKeyboard, faLightbulb, faMoon } from "@fortawesome/free-regular-svg-icons";
import { RoundedSwitch } from "~/components/Switch";

const cx = classNames.bind(styles);
const menu_items = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: "LIVE Creator Hub",
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Languages",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Vietnam",
                },
                {
                    type: "language",
                    code: "cn",
                    title: "China",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: "Dark mode",
        switch: <RoundedSwitch />,
        type: "darkmode",
    },
];
const handleOnChange = (obj) => {
    switch (obj.type) {
        case "darkmode":
            console.log("On change dark mode");
            break;
        case "language": {
            console.log("Change language: " + JSON.stringify(obj));
            break;
        }
    }
};

export default function Header() {
    const [searchAccount, setSearchAccount] = useState([]);

    // Test show proper if list account is not empty
    useEffect(() => {
        setTimeout(() => {
            setSearchAccount([1, 2, 3, 4]);
        }, 3000);
    }, []);
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive
                    delay={[0, 100]}
                    render={(attrs) => (
                        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div className={cx("search-account-title")}>Accounts</div>
                                <div>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx("search")}>
                        <input type="text" placeholder="Search" />
                        <div className={cx("modify")}>
                            <FontAwesomeIcon className={cx("clear")} icon={faCircleXmark} />
                            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
                        </div>
                        <div className={cx("divider")}></div>
                        <div className={cx("search-btn")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                </Tippy>
                <div className={cx("action")}>
                    <Button
                        outline
                        onClick={() => {
                            alert("Upload popup");
                        }}
                        className={cx("dark-color-btn")}
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                    >
                        Upload
                    </Button>
                    <Button primary>Login</Button>
                    <Menu items={menu_items} onChange={handleOnChange}>
                        <button className={cx("action-icon")} onClick={() => {}}>
                            <FontAwesomeIcon icon={faEllipsisV} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}
