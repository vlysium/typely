import { getRouteApi } from "@tanstack/react-router";

import { ComboboxField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

const indexRoute = getRouteApi("/");

const FontFamily = () => {
	const data = indexRoute.useLoaderData();

	const { settings, setBodyFontFamily } = useSettingsStore();

	return (
		<ComboboxField
			value={settings.body.fontFamily}
			setValue={setBodyFontFamily}
			label="Font family"
			items={data.fonts.map((font) => ({ value: font }))}
		/>
	);
};

export default FontFamily;
