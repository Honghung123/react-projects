import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { faCheckCircle, faEllipsisH, faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";

import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../Popper";

const cx = classNames.bind(styles);

export default function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/9237c1af814559f5e725e865e9bd1c35~c5_300x300.webp?lk3s=a5d48078&x-expires=1710777600&x-signature=3EQb1ZEcaJ8wgS3VXhJBwcZSGik%3D"
                alt=""
            />
            <div className={cx("info-wrapper")}>
                <div className={cx("info-section")}>
                    <div className={cx("info")}>
                        <p className={cx("name")}>
                            <span>Nguyen Huy Hoang</span>
                            <FontAwesomeIcon className={cx("verify-badge")} icon={faCheckCircle} />
                        </p>
                        <p className={cx("username")}>hoangcute</p>
                    </div>
                    <div className={cx("more")}>
                        <Tippy
                            interactive
                            placement="bottom"
                            render={(attrs) => (
                                <div className={cx("action")} tabIndex="-1" {...attrs}>
                                    <div className={cx("report")}>
                                        <FontAwesomeIcon icon={faFlag} />
                                        Report
                                    </div>
                                    <div className={cx("irrelevant")}>
                                        <FontAwesomeIcon icon={faHeartCrack} />
                                        Mark as irrelevant
                                    </div>
                                </div>
                            )}
                        >
                            <span className={cx("icon")}>
                                <FontAwesomeIcon icon={faEllipsisH} />
                            </span>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
}
