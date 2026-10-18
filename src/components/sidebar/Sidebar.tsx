import { Separator } from "@base-ui/react";
import clsx from "clsx";

import { BaseScale, BaseSize } from "./base";
import { FontFamily, FontWeight, LetterSpacing, LineHeight } from "./body";
import styles from "./Sidebar.module.css";
import { Details } from "@/components/ui/details";
import useSettingsStore from "@/lib/stores/settings.store";

const Sidebar = () => {
	const { settings } = useSettingsStore();

	return (
		<aside className={clsx(styles["sidebar"])}>
			<form className={clsx(styles["form"])} onSubmit={(e) => e.preventDefault()}>
				<Details summary="Base settings" defaultOpen={true}>
					<BaseSize />
					<BaseScale />
				</Details>
				<Separator orientation="horizontal" className={clsx(styles["separator"])} />
				<Details summary="Body" defaultOpen={true}>
					<FontFamily />
					<FontWeight />
					<LineHeight />
					<LetterSpacing />
				</Details>
			</form>
		</aside>
	);
};

export default Sidebar;
