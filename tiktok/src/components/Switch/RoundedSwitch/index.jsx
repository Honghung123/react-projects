import styles from "./RoundedSwitch.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function RoundedSwitch() {
    return (
        <>
            <label className={cx("switch")}>
                <input type="checkbox" className={cx("checkbox")} />
                <span className={cx("slider", { round: true })}></span>
            </label>
        </>
    );
}
