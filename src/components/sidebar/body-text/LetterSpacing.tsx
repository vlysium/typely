import { NumberField } from "@/components/ui/forms";

const LetterSpacing = () => {
	return (
		<NumberField label="Letter spacing" defaultValue={0} step={0.002} suffix="em" />
	);
};

export default LetterSpacing;
