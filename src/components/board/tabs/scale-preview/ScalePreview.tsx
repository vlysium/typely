import clsx from "clsx";

import styles from "./ScalePreview.module.css";
import ScalePreviewItem from "./ScalePreviewItem";

export const scaleItems = [
	{ value: 7, name: "6xl" },
	{ value: 6, name: "5xl" },
	{ value: 5, name: "4xl" },
	{ value: 4, name: "3xl" },
	{ value: 3, name: "2xl" },
	{ value: 2, name: "xl" },
	{ value: 1, name: "lg" },
	{ value: 0, name: "base" },
	{ value: -1, name: "sm" },
	{ value: -2, name: "xs" },
];

const ScalePreview = () => {
	return (
		<table className={clsx(styles["scale-preview"])}>
			<tbody className={clsx(styles["scale-preview-body"])}>
				{scaleItems.map((item) => (
					<ScalePreviewItem key={item.name} item={item} />
				))}
			</tbody>
		</table>
	);
};

export default ScalePreview;
