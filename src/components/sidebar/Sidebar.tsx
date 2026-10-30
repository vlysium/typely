import { Separator } from "@base-ui/react";
import clsx from "clsx";

import { BaseScale, BaseSize } from "./base";
import { FontFamily, FontWeight, LetterSpacing, LineHeight } from "./body";
import { FluidScale, FluidSize, MaxWidth, MinWidth } from "./fluid";
import { PreviewText, Unit } from "./preview";
import styles from "./Sidebar.module.css";
import { Details } from "@/components/ui/details";

const Sidebar = () => {
	return (
		<aside className={clsx(styles["sidebar"])}>
			<form className={clsx(styles["form"])} onSubmit={(e) => e.preventDefault()}>
				<Details summary="Preview" defaultOpen={true}>
					<PreviewText />
					<Unit />
				</Details>
				<Details summary="Base settings" defaultOpen={true}>
					<BaseSize />
					<BaseScale />
				</Details>
				<Separator orientation="horizontal" className={clsx(styles["separator"])} />
				<Details summary="Fluid" defaultOpen={false}>
					<FluidSize />
					<FluidScale />
					<div className={clsx(styles["two-cols"])}>
						<MinWidth />
						<MaxWidth />
					</div>
				</Details>
				<Separator orientation="horizontal" className={clsx(styles["separator"])} />
				<Details summary="Body" defaultOpen={true}>
					<FontFamily />
					<FontWeight />
					<div className={clsx(styles["two-cols"])}>
						<LineHeight />
						<LetterSpacing />
					</div>
				</Details>
				<Separator orientation="horizontal" className={clsx(styles["separator"])} />
			</form>
		</aside>
	);
};

export default Sidebar;
