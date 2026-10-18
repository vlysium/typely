import { Separator } from "@base-ui/react";
import { getRouteApi } from "@tanstack/react-router";
import clsx from "clsx";

import styles from "./Sidebar.module.css";
import { Details } from "@/components/ui/details";
import { ComboboxField, NumberField, SelectField } from "@/components/ui/forms";

const scaleOptions: Array<{ label: string; value: string }> = [
	{ label: "1.067 — Minor Second", value: "1.067" },
	{ label: "1.125 — Major Second", value: "1.125" },
	{ label: "1.200 — Minor Third", value: "1.2" },
	{ label: "1.250 — Major Third", value: "1.25" },
	{ label: "1.333 — Perfect Fourth", value: "1.333" },
	{ label: "1.414 — Augmented Fourth", value: "1.414" },
	{ label: "1.500 — Perfect Fifth", value: "1.5" },
	{ label: "1.618 — Golden Ratio", value: "1.618" }
];

const weightOptions: Array<{ label: string; value: string }> = [
	{ label: "100 — Thin", value: "100" },
	{ label: "200 — Extra Light", value: "200" },
	{ label: "300 — Light", value: "300" },
	{ label: "400 — Regular", value: "400" },
	{ label: "500 — Medium", value: "500" },
	{ label: "600 — Semi Bold", value: "600" },
	{ label: "700 — Bold", value: "700" },
	{ label: "800 — Extra Bold", value: "800" },
	{ label: "900 — Black", value: "900" }
];

const indexRoute = getRouteApi("/");

const Sidebar = () => {
	const data = indexRoute.useLoaderData();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<aside className={clsx(styles["sidebar"])}>
			<form className={clsx(styles["form"])} onSubmit={handleSubmit}>
				<Details summary="Base settings" defaultOpen={true}>
					<NumberField label="Base size" defaultValue={16} step={0.5} min={0} suffix="px" />
					<SelectField label="Scale" options={scaleOptions} defaultValue={scaleOptions[2].value} />
				</Details>
				<Separator orientation="horizontal" className={clsx(styles["separator"])} />
				<Details summary="Body text" defaultOpen={true}>
					<ComboboxField label="Font" items={data.fonts} defaultValue="Inter" />
					<SelectField label="Font weight" options={weightOptions} defaultValue={weightOptions[3].value} />
					<NumberField label="Line height" defaultValue={1.5} step={0.05} min={0} />
					<NumberField label="Letter spacing" defaultValue={0} step={0.002} suffix="em" />
				</Details>
			</form>
		</aside>
	);
};

export default Sidebar;
