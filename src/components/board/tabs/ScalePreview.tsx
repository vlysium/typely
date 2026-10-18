import clsx from "clsx";

import styles from "./ScalePreview.module.css";
import useSettingsStore from "@/lib/stores/settings.store";
import { calculateFontSize } from "@/lib/utils";

const scaleItems = [
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

const previewText = "The quick brown fox jumps over the lazy dog.";

const ScalePreview = () => {
	const { settings } = useSettingsStore();
	const { base } = settings;

	return (
		<table className={clsx(styles["scale-preview"])}>
			<tbody>
				{scaleItems.map((item) => (
					<tr key={item.name} className={clsx(styles["scale-item"])}>
						<td className={clsx(styles["scale-name"])}>{item.name}</td>
						<td className={clsx(styles["scale-value"])}>{`${calculateFontSize(base.size, base.scale, item.value, "px")}px`}</td>
						<td className={clsx(styles["scale-preview-text"])}><span className={clsx(`preview-${item.name}`, "preview-body")}>{previewText}</span></td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default ScalePreview;
