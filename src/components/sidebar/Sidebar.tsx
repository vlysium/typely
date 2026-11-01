import { Separator } from "@base-ui/react";
import clsx from "clsx";

import { BaseScale, BaseSize } from "./base";
import { FontFamily, FontWeight, LetterSpacing, LineHeight } from "./body";
import { EnableFluidSettings, FluidScale, FluidSize, MaxWidth, MinWidth } from "./fluid";
import { PreviewText, Unit } from "./preview";
import styles from "./Sidebar.module.css";
import { Details } from "@/components/ui/details";

const Sidebar = () => {
	return (
		<aside className={clsx(styles["sidebar"])}>
			<form className={clsx(styles["form"])} onSubmit={(e) => e.preventDefault()}>
				<Details summary="Preview" defaultOpen={true}>
					<PreviewText className={clsx(styles["preview-text"])} />
					<Unit className={clsx(styles["unit"])} />
				</Details>
				<Separator orientation="horizontal" className={clsx(styles["separator"])} />
				<Details summary="Base settings" defaultOpen={true}>
					<BaseSize className={clsx(styles["base-size"])} />
					<BaseScale className={clsx(styles["base-scale"])} />
					<div className={clsx(styles["fluid-settings"])}>
						<EnableFluidSettings className={clsx(styles["enable-fluid-settings"])} />
						<FluidSize className={clsx(styles["fluid-size"])} />
						<FluidScale className={clsx(styles["fluid-scale"])} />
						<MinWidth className={clsx(styles["min-width"])} />
						<MaxWidth className={clsx(styles["max-width"])} />
					</div>
				</Details>
				<Separator orientation="horizontal" className={clsx(styles["separator"])} />
				<Details summary="Body" defaultOpen={true}>
					<FontFamily className={clsx(styles["font-family"])} />
					<FontWeight className={clsx(styles["font-weight"])} />
					<LineHeight className={clsx(styles["line-height"])} />
					<LetterSpacing className={clsx(styles["letter-spacing"])} />
				</Details>
				<Separator orientation="horizontal" className={clsx(styles["separator"])} />
			</form>
		</aside>
	);
};

export default Sidebar;
