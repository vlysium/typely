import { useGoogleFonts } from "@/lib/hooks/useGoogleFonts";
import useSettingsStore from "@/lib/stores/settings.store";
import { calculateFontSize } from "@/lib/utils";

const PreviewStyle = () => {

	const { settings } = useSettingsStore();
	const { base, body } = settings;

	useGoogleFonts({ fonts: [{ font: body.fontFamily }], weights: { [body.fontFamily]: [body.fontWeight] } });

	return (
		<style>
			{
				`
					:root {
						--preview-base-font-size: ${base.size}px;

						--preview-body-font-family: ${body.fontFamily};
						--preview-body-font-weight: ${body.fontWeight};
						--preview-body-line-height: ${body.lineHeight};
						--preview-body-letter-spacing: ${body.letterSpacing}em;

						--preview-xs: ${calculateFontSize(base.size, base.scale, -2, "px")}px;
            --preview-sm: ${calculateFontSize(base.size, base.scale, -1, "px")}px;
            --preview-base: ${calculateFontSize(base.size, base.scale, 0, "px")}px;
            --preview-lg: ${calculateFontSize(base.size, base.scale, 1, "px")}px;
            --preview-xl: ${calculateFontSize(base.size, base.scale, 2, "px")}px;
            --preview-2xl: ${calculateFontSize(base.size, base.scale, 3, "px")}px;
            --preview-3xl: ${calculateFontSize(base.size, base.scale, 4, "px")}px;
            --preview-4xl: ${calculateFontSize(base.size, base.scale, 5, "px")}px;
            --preview-5xl: ${calculateFontSize(base.size, base.scale, 6, "px")}px;
            --preview-6xl: ${calculateFontSize(base.size, base.scale, 7, "px")}px;
					}

					.preview-body {
						font-family: var(--preview-body-font-family);
						font-weight: var(--preview-body-font-weight);
						line-height: var(--preview-body-line-height);
						letter-spacing: var(--preview-body-letter-spacing);
						transition-property: font-size, font-weight, line-height, letter-spacing;
						transition-duration: 0.5s;
					}

					.preview-xs {
						font-size: var(--preview-xs);
					}

					.preview-sm {
						font-size: var(--preview-sm);
					}

					.preview-base {
						font-size: var(--preview-base);
					}

					.preview-lg {
						font-size: var(--preview-lg);
					}

					.preview-xl {
						font-size: var(--preview-xl);
					}

					.preview-2xl {
						font-size: var(--preview-2xl);
					}

					.preview-3xl {
						font-size: var(--preview-3xl);
					}

					.preview-4xl {
						font-size: var(--preview-4xl);
					}

					.preview-5xl {
						font-size: var(--preview-5xl);
					}

					.preview-6xl {
						font-size: var(--preview-6xl);
					}
				`
			}
		</style>
	);
};

export default PreviewStyle;
