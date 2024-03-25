import { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import btnStyles from "./Button.module.css";

interface Props {
    children?: ReactNode;
    to?: string;
    direction: "left" | "right" | "diagonal";
    type: "primaryBtn" | "secondaryBtn" | "tertiaryBtn";
    textColor?: "white" | "orange";
    styles?: CSSProperties;
    handleClick?: () => void;
}

const Btn = (type: Props['type'], direction: Props["direction"], handleClick?: Props["handleClick"]) => {
    return (<button className={`${btnStyles.btn} ${btnStyles[type]} ${btnStyles[direction]}`} onClick={handleClick && (() => handleClick())}>
        <FontAwesomeIcon icon={faArrowUpLong} />

        <div className={`${btnStyles.shadowEffect}`}></div>
    </button>)
}

const Button = ({ children, to, direction, type, textColor, styles, handleClick }: Props) => {
    return (
        <div className={`${btnStyles.btnBox} `} style={styles}>
            <p className={`${btnStyles.text} ${textColor ? btnStyles[textColor] : ""}`}>{children}</p>

            {
                to &&
                <Link href={to || ""} >
                    {Btn(type, direction)}
                </Link>
            }

            {handleClick && Btn(type, direction, handleClick)}

        </div >
    )
}

export default Button