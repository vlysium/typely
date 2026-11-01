import { NumberField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

interface MinWidthProps {
	className?: string;
}

const MinWidth = ({ className }: MinWidthProps) => {
	const { settings, setFluidMinWidth } = useSettingsStore();

	return (
		<NumberField
			className={className}
			value={settings.fluid.minWidth}
			setValue={setFluidMinWidth}
			label="Min Width"
			step={1}
			min={0}
			suffix="px"
			disabled={!settings.fluid.isEnabled}
		/>
	);
};

export default MinWidth;
