import clsx from "clsx";

import type { scaleItems } from "./ScalePreview";
import styles from "./ScalePreview.module.css";
import useSettingsStore from "@/lib/stores/settings.store";
import { calculateFontSize } from "@/lib/utils";

interface TextPreviewProps {
	item: typeof scaleItems[number];
}

const TextPreview = ({ item }: TextPreviewProps) => {
	const { settings } = useSettingsStore();
	const { preview, base } = settings;

	return (
		<tr key={item.name} className={clsx(styles["scale-item"])}>
			<td className={clsx(styles["scale-name"])}>{item.name}</td>
			<td className={clsx(styles["scale-value"])}>{calculateFontSize(base.size, base.scale, item.value, preview.unit)}{preview.unit}</td>
			<td className={clsx(styles["scale-preview-text"])}><span className={clsx(`preview-${item.name}`, "preview-body")}>{preview.text}</span></td>
		</tr>
	);
};

export default TextPreview;
