import { TextAreaField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

interface PreviewTextProps {
	className?: string;
}

const PreviewText = ({ className }: PreviewTextProps) => {
	const { settings, setPreviewText } = useSettingsStore();

	return (
		<TextAreaField
			label="Preview Text"
			value={settings.preview.text}
			setValue={setPreviewText}
			className={className}
		/>
	);
};

export default PreviewText;
