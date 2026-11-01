import { NumberField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

interface LetterSpacingProps {
	className?: string;
}

const LetterSpacing = ({ className }: LetterSpacingProps) => {
	const { settings, setBodyLetterSpacing } = useSettingsStore();

	return (
		<NumberField
			value={settings.body.letterSpacing}
			setValue={setBodyLetterSpacing}
			label="Letter spacing"
			step={0.002}
			suffix="em"
			className={className}
		/>
	);
};

export default LetterSpacing;
