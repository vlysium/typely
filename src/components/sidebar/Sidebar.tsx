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
					<NumberField label="Base size" defaultValue={16} step={0.5} suffix="px" />
					<SelectField htmlLabel="Scale" options={scaleOptions} defaultValue={scaleOptions[2].value} />
				</Details>
				<Details summary="Typography" defaultOpen={true}>
					<ComboboxField label="Font" items={data.fonts} defaultValue="Inter" />
				</Details>
			</form>
		</aside>
	);
};

export default Sidebar;
