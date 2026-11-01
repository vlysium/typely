import { useGoogleFonts } from "@/lib/hooks/useGoogleFonts";
import useSettingsStore from "@/lib/stores/settings.store";
import { calculateFluidFontSize, calculateFontSize } from "@/lib/utils";

const PreviewStyle = () => {

	const { settings } = useSettingsStore();
	const { base, body, fluid } = settings;

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

						--preview-xs: ${calculateFluidFontSize(base, fluid, -2, "px")};
            --preview-sm: ${calculateFluidFontSize(base, fluid, -1, "px")};
            --preview-base: ${calculateFluidFontSize(base, fluid, 0, "px")};
            --preview-lg: ${calculateFluidFontSize(base, fluid, 1, "px")};
            --preview-xl: ${calculateFluidFontSize(base, fluid, 2, "px")};
            --preview-2xl: ${calculateFluidFontSize(base, fluid, 3, "px")};
            --preview-3xl: ${calculateFluidFontSize(base, fluid, 4, "px")};
            --preview-4xl: ${calculateFluidFontSize(base, fluid, 5, "px")};
            --preview-5xl: ${calculateFluidFontSize(base, fluid, 6, "px")};
            --preview-6xl: ${calculateFluidFontSize(base, fluid, 7, "px")};
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
				`.replaceAll(/\s+/g, " ") // Remove extra whitespace
			}
		</style>
	);
};

export default PreviewStyle;
