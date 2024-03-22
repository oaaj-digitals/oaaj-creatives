import { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong, faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import btnStyles from "./Button.module.css";

interface Props {
    children: ReactNode,
    to?: string;
    direction: "left" | "right" | "diagonal";
    type: "primaryBtn" | "secondaryBtn" | "tertiaryBtn";
    textColor?: "white" | "orange";
    styles: CSSProperties | undefined,
}

const Button = ({ children, to, direction, type, textColor, styles }: Props) => {
    return (
        <div className={`${btnStyles.btnBox} `} style={styles}>
            <p className={`${btnStyles.text} ${textColor ? btnStyles[textColor] : ""}`}>{children}</p>
            <Link href={to || ""} >
                <button className={`${btnStyles.btn} ${btnStyles[type]}`}>
                    {direction === 'diagonal' ? <FontAwesomeIcon icon={faArrowUpLong} className={btnStyles.diagonal} /> : null}

                    {direction === 'left' ? <FontAwesomeIcon icon={faArrowLeftLong} /> : null}

                    {direction === 'right' ? <FontAwesomeIcon icon={faArrowRightLong} /> : null}

                    <div className={`${btnStyles.shadowEffect}`}></div>
                </button>
            </Link>
        </div >
    )
}

export default Button