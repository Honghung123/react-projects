import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function Button({
    primary = false,
    outline = false,
    rounded = false,
    circle = false,
    small = false,
    large = false,
    disabled = false,
    to,
    href,
    children,
    onClick,
    className,
    leftIcon = undefined,
    rightIcon = undefined,
    ...passProps
}) {
    let Element = "button";
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listeners
    if (disabled) {
        // Only apply for onClick event.
        // Apply for other events
        Object.keys(props).forEach((key) => {
            if (typeof props[key] === "function" && key.startsWith("on")) {
                delete props[key];
            }
        });
    }

    if (to) {
        Element = Link;
        props.to = to;
    } else if (href) {
        Element = "a";
        props.href = href;
    }

    const classes = cx("wrapper", {
        primary,
        outline,
        small,
        large,
        disabled,
        rounded,
        circle,
        [className]: className,
    });
    return (
        <Element className={classes} {...props}>
            {leftIcon && <span className={cx("icon")}> {leftIcon}</span>}
            {children && <span className={cx("text", { custom: rightIcon ? true : false })}>{children}</span>}
            {rightIcon && <span className={cx("right-icon")}> {rightIcon}</span>}
        </Element>
    );
}
