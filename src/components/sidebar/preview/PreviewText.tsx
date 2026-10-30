import { TextAreaField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

const PreviewText = () => {
	const { settings, setPreviewText } = useSettingsStore();

	return (
		<TextAreaField
			label="Preview Text"
			value={settings.preview.text}
			setValue={setPreviewText}
		/>
	);
};

export default PreviewText;
