import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
export default function HeaderMenu({ title, onBack }) {
    return (
        <div className={cx("menu-header")}>
            <span className={cx("menu-back")} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            <h4 className={cx("menu-header-title")}>{title}</h4>
        </div>
    );
}
