import Image, { StaticImageData } from "next/image";
import styles from "./DisplayProject.module.css";
import Link from "next/link";

interface Props {
	to: string,
	title: string;
	image: string | StaticImageData;
	category: string;
}

const DisplayProject = ({ image, title, to, category }: Props) => {
	return (
		<Link href={to} className={styles.displayBox}>
			<Image src={image} alt={`${title} project image`} className={styles.displayImage} />
			<p className={styles.title}>{title} - {category}</p>
		</Link >
	)
}

export default DisplayProject