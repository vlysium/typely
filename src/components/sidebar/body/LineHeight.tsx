import { NumberField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

const LineHeight = () => {
	const { settings, setBodyLineHeight } = useSettingsStore();

	return (
		<NumberField
			value={settings.body.lineHeight}
			setValue={setBodyLineHeight}
			label="Line height"
			step={0.05}
			min={0}
		/>
	);
};

export default LineHeight;
