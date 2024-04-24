import Button from "~/components/Button";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export default function MenuItem({ children, item, onClick }) {
    return (
        <Button className={cx("menu-item")} leftIcon={item.icon} rightIcon={item.switch} to={item.to} onClick={onClick}>
            <span className={cx("item")}>{item.title}</span>
        </Button>
    );
}
