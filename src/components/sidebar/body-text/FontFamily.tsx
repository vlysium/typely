import { getRouteApi } from "@tanstack/react-router";

import { ComboboxField } from "@/components/ui/forms";

const indexRoute = getRouteApi("/");

const FontFamily = () => {
	const data = indexRoute.useLoaderData();

	return (
		<ComboboxField label="Font family" items={data.fonts} defaultValue="Inter" />
	);
};

export default FontFamily;
