import { NumberField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

interface LineHeightProps {
	className?: string;
}

const LineHeight = ({ className }: LineHeightProps) => {
	const { settings, setBodyLineHeight } = useSettingsStore();

	return (
		<NumberField
			value={settings.body.lineHeight}
			setValue={setBodyLineHeight}
			label="Line height"
			step={0.05}
			min={0}
			className={className}
		/>
	);
};

export default LineHeight;
